import requests
from sdk.models import operations
from . import utils

class Content:
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

    
    def get_content_aspect_id_(self, request: operations.GetContentAspectIDRequest) -> operations.GetContentAspectIDResponse:
        r"""Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/content/{aspectId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentAspectIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_content_aspect_id_civix_document_id_(self, request: operations.GetContentAspectIDCivixDocumentIDRequest) -> operations.GetContentAspectIDCivixDocumentIDResponse:
        r"""Lists the metadata available for the specified index or directory from the BCLaws legislative respository
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/content/{aspectId}/{civixDocumentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentAspectIDCivixDocumentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    