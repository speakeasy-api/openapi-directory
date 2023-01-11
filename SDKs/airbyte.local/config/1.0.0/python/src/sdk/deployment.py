import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Deployment:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def export_archive(self) -> operations.ExportArchiveResponse:
        r"""Export Airbyte Configuration and Data Archive
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/deployment/export"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-gzip"):
                res.airbyte_archive = r.content

        return res

    
    def import_archive(self, request: operations.ImportArchiveRequest) -> operations.ImportArchiveResponse:
        r"""Import Airbyte Configuration and Data Archive
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/deployment/import"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportRead])
                res.import_read = out

        return res

    