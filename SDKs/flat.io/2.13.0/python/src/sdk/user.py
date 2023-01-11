import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class User:
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

    
    def ger_user_likes(self, request: operations.GerUserLikesRequest) -> operations.GerUserLikesResponse:
        r"""List liked scores
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user}/likes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GerUserLikesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ScoreDetails]])
                res.score_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_user(self, request: operations.GetUserRequest) -> operations.GetUserResponse:
        r"""Get a public user profile
        Get a public profile of a Flat User.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserPublic])
                res.user_public = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_user_scores(self, request: operations.GetUserScoresRequest) -> operations.GetUserScoresResponse:
        r"""List user's scores
        Get the list of public scores owned by a User.
        
        **DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
        This method will no longer list private and shared scores, but only public scores of a Flat account.
        If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user}/scores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserScoresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ScoreDetails]])
                res.score_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    