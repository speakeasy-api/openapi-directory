import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Head:
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

    
    def head_key_pk_(self, request: operations.HeadKeyPkRequest) -> operations.HeadKeyPkResponse:
        r"""HEAD info on Authentiq ID
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        
        client = self._client
        
        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadKeyPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_retrieve_head(self, request: operations.SignRetrieveHeadRequest) -> operations.SignRetrieveHeadResponse:
        r"""HEAD to get the status of a verification job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignRetrieveHeadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    