import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class APIInfo:
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

    
    def get_containers_messages(self, request: operations.GetContainersMessagesRequest) -> operations.GetContainersMessagesResponse:
        r"""List messages for the user
        This endpoint retrieves all IBM Containers system messages for the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/messages"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContainersMessages200ApplicationJSON])
                res.get_containers_messages_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_containers_version(self) -> operations.GetContainersVersionResponse:
        r"""List latest API version
        This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/containers/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContainersVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.containers_version_get_info = out
        elif r.status_code == 500:
            pass

        return res

    