import requests
from typing import Any,Optional
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

    
    def add_user(self, request: operations.AddUserRequest) -> operations.AddUserResponse:
        r"""Create a user
        Adds a new user to the account. The user may be configured as an admin or standard user, and (if a standard user) may be assigned a restricted [home directory](/docs/account/04-users/00-introduction#setting-the-user-s-home-directory) and restricted [permissions](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). 
        
        **Notes:**
        
        - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserResponse])
                res.user_response = out

        return res

    
    def delete_user(self, request: operations.DeleteUserRequest) -> operations.DeleteUserResponse:
        r"""Delete a user
        Delete a user from the account. Deleting a user does **NOT** delete any files from the account; it merely removes a user's access. Aternatively, locking a user via the [PATCH /users/{id}](#operation/updateUser) will keep the user in your account, but make it unable to log in. 
        
        Resources and shares owned by the deleted user will be owned by the master user after the deletion.
        
        **Notes:**
         
        - You must have [admin-level access](/docs/account/04-users/01-admin-users) to delete a user.
        - The primary owner of the account cannot be deleted.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmptyResponse])
                res.empty_response = out

        return res

    
    def get_user_by_id(self, request: operations.GetUserByIDRequest) -> operations.GetUserByIDResponse:
        r"""Get info for a user
        Get the details for a specific user. You can use the `include` parameter to also get the details of related records, such as the account or the home directory.
        
        **Notes:**
        
        - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to use this.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserResponse])
                res.user_response = out

        return res

    
    def list_users(self, request: operations.ListUsersRequest) -> operations.ListUsersResponse:
        r"""Get a list of users
        Get a list of the users in your account. There are three main types of searches you can do with this method:
        
        1. Search for a user by username. If you provide the `username` parameter in your call, then only the user who exactly matches that username will be in the list of matches. Any other parameters are ignored.
        1. Search for a user by individual filter fields (`nickname`,`email`,`role`,`status`,`homeDir`). Users in the list will be ones who match all of the filters you choose to search by. For example, you could look for users with the \"admin\" `role` AND `email` addresses ending in \"*@acme.com\". 
        1. Search for a user by search string. If you provide the `search` parameter, users whose nickname OR email OR role OR homeDir match value your provide.
        
        **Notes:**
        
        - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
        - The homeDir is the full path to the user's home directory, not a resource ID or hash.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserCollectionResponse])
                res.user_collection_response = out

        return res

    
    def update_user(self, request: operations.UpdateUserRequest) -> operations.UpdateUserResponse:
        r"""Update a user
        Updates the settings for the user. Note that the unique key for this API call is our internal ID, and _not_ the username, as the username can be changed.
        
        In the request body, you should only send the parameters for values that you wish to change for the user.
        
        **Notes:**
        
        - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to edit other users. If you have user-level access, you can only update your own user settings.
        - You cannot edit a master user with this method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserResponse])
                res.user_response = out

        return res

    