import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def get_user(self, request: operations.GetUserRequest) -> operations.GetUserResponse:
        r"""Returns details of a specific fire.com user.
        You can retrieve the details of a specific fire.com user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneusersGetResponses200ContentApplication1jsonSchemaItems])
                res.oneusers_get_responses_200_content_application_1json_schema_items = out

        return res

    
    def get_users(self) -> operations.GetUsersResponse:
        r"""Returns list of all users on your fire.com account
        You can retrieve the details of all fire.com users on your acount.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetUsersUser]])
                res.users = out

        return res

    