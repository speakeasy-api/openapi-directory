import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Session:
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

    
    def create_session_using_get(self, request: operations.CreateSessionUsingGetRequest) -> operations.CreateSessionUsingGetResponse:
        r"""creates a new session. validUntil is an unix timestamp in seconds
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createSession"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSessionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingGet200ApplicationJSON])
                res.create_session_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingGet400ApplicationJSON])
                res.create_session_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingGet401ApplicationJSON])
                res.create_session_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingGet500ApplicationJSON])
                res.create_session_using_get_500_application_json_object = out

        return res

    
    def create_session_using_post(self, request: operations.CreateSessionUsingPostRequest) -> operations.CreateSessionUsingPostResponse:
        r"""creates a new session. validUntil is an unix timestamp in seconds
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createSession"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSessionUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingPost200ApplicationJSON])
                res.create_session_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingPost400ApplicationJSON])
                res.create_session_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingPost401ApplicationJSON])
                res.create_session_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSessionUsingPost500ApplicationJSON])
                res.create_session_using_post_500_application_json_object = out

        return res

    
    def delete_session_using_get(self, request: operations.DeleteSessionUsingGetRequest) -> operations.DeleteSessionUsingGetResponse:
        r"""deletes a session
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deleteSession"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSessionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingGet200ApplicationJSON])
                res.delete_session_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingGet400ApplicationJSON])
                res.delete_session_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingGet401ApplicationJSON])
                res.delete_session_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingGet500ApplicationJSON])
                res.delete_session_using_get_500_application_json_object = out

        return res

    
    def delete_session_using_post(self, request: operations.DeleteSessionUsingPostRequest) -> operations.DeleteSessionUsingPostResponse:
        r"""deletes a session
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deleteSession"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSessionUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingPost200ApplicationJSON])
                res.delete_session_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingPost400ApplicationJSON])
                res.delete_session_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingPost401ApplicationJSON])
                res.delete_session_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSessionUsingPost500ApplicationJSON])
                res.delete_session_using_post_500_application_json_object = out

        return res

    
    def get_session_info_using_get(self, request: operations.GetSessionInfoUsingGetRequest) -> operations.GetSessionInfoUsingGetResponse:
        r"""returns informations about a session
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getSessionInfo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessionInfoUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingGet200ApplicationJSON])
                res.get_session_info_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingGet400ApplicationJSON])
                res.get_session_info_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingGet401ApplicationJSON])
                res.get_session_info_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingGet500ApplicationJSON])
                res.get_session_info_using_get_500_application_json_object = out

        return res

    
    def get_session_info_using_post(self, request: operations.GetSessionInfoUsingPostRequest) -> operations.GetSessionInfoUsingPostResponse:
        r"""returns informations about a session
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getSessionInfo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessionInfoUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingPost200ApplicationJSON])
                res.get_session_info_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingPost400ApplicationJSON])
                res.get_session_info_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingPost401ApplicationJSON])
                res.get_session_info_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSessionInfoUsingPost500ApplicationJSON])
                res.get_session_info_using_post_500_application_json_object = out

        return res

    