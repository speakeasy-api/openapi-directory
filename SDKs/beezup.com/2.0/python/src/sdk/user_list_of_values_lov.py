import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class UserListOfValuesLov:
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

    
    def get_user_list_of_values(self, request: operations.GetUserListOfValuesRequest) -> operations.GetUserListOfValuesResponse:
        r"""Get the list of values related to this list name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/lov/{listName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserListOfValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserListOfValuesResponse])
                res.user_list_of_values_response = out
        elif r.status_code == 304:
            res.headers = r.headers
            
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def get_user_lov_index(self) -> operations.GetUserLovIndexResponse:
        r"""Get all list names
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/lov/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserLovIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserLovIndex])
                res.user_lov_index = out
        elif r.status_code == 304:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    