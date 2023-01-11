import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Authentication:
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

    
    def get_sub_user_keys_get_sub_user_keys_get(self, request: operations.GetSubUserKeysGetSubUserKeysGetRequest) -> operations.GetSubUserKeysGetSubUserKeysGetResponse:
        r"""Get all Sub User Keys associated with your account.
        Get a list of your issued SubUser API Keys. Includes active and revoked keys.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getSubUserKeys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubUserKeysGetSubUserKeysGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def make_sub_user_key_make_sub_user_key_post(self, request: operations.MakeSubUserKeyMakeSubUserKeyPostRequest) -> operations.MakeSubUserKeyMakeSubUserKeyPostResponse:
        r"""Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
        This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the \"localhost\" domain.
        This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls. 
        The \"endpoints\" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a \"*\" value in the array will allow
        all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.
        All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate 
        higher than once per second. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/makeSubUserKey"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MakeSubUserKeyMakeSubUserKeyPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubUserJSONWebToken])
                res.sub_user_json_web_token = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def make_token_get_token_get(self, request: operations.MakeTokenGetTokenGetRequest) -> operations.MakeTokenGetTokenGetResponse:
        r"""Get a JWT from your API credentials
        This is the first function you should call. 
        
        If you are accessing our API through a third party provider they will handle authenticating to our API for you 
        and you will not need call this function or retrieve a JSON Web Token. 
        
        All other functions require the JSON Web Token (JWT) from this function to 
        be incuded in their arguments. The value of the \"token\" field is the actual JWT and any other values in the returned JSON
        are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
        API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
        to get a new token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getToken"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MakeTokenGetTokenGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JSONWebToken])
                res.json_web_token = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def make_token_get_token_post(self, request: operations.MakeTokenGetTokenPostRequest) -> operations.MakeTokenGetTokenPostResponse:
        r"""Get a JWT from your API credentials
        This is the first function you should call. 
        
        If you are accessing our API through a third party provider they will handle authenticating to our API for you 
        and you will not need call this function or retrieve a JSON Web Token. 
        
        All other functions require the JSON Web Token (JWT) from this function to 
        be incuded in their arguments. The value of the \"token\" field is the actual JWT and any other values in the returned JSON
        are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
        API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
        to get a new token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getToken"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MakeTokenGetTokenPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JSONWebToken])
                res.json_web_token = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def revoke_sub_user_key_revoke_sub_user_key_put(self, request: operations.RevokeSubUserKeyRevokeSubUserKeyPutRequest) -> operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse:
        r"""Revoke a Sub User Key associated with your account.
        Revoke a SubUser API Key with the given UUID. This action can not be undone.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/revokeSubUserKey"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    