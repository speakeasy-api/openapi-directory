import requests
from typing import Optional
from sdk.models import operations
from . import utils

class UserManagement:
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

    
    def delete_users_userid(self, request: operations.DeleteUsersUseridRequest) -> operations.DeleteUsersUseridResponse:
        r"""Unlink User
        Deletes a User and all of their data permanently, and invalidates any associated sessions, authorization codes, and access/refresh tokens
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsersUseridResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_users_userid_authorization(self, request: operations.DeleteUsersUseridAuthorizationRequest) -> operations.DeleteUsersUseridAuthorizationResponse:
        r"""Deauthorize User
        Deletes the User's stored vendor authorizations and credentials, invalidates any associated sessions, authorization codes, and access/refresh tokens.
        
        All other User data is retained, and if the User is sent through the Link User flow in the future their account will be just as they left it.
        
        No webhook events will be generated for a deauthorized user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/authorization", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsersUseridAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def post_users_userid_link(self, request: operations.PostUsersUseridLinkRequest) -> operations.PostUsersUseridLinkResponse:
        r"""Link User
        Creates an Enode Link session attached to the provided User ID. If this User does not exist, it will be created. The returned `linkState` gives the user short-lived access to Enode Link.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/link", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersUseridLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostUsersUseridLink200ApplicationJSON])
                res.post_users_userid_link_200_application_json_object = out

        return res

    