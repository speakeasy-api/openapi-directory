import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Author:
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

    
    def create_author_if_not_exists_for_using_get(self, request: operations.CreateAuthorIfNotExistsForUsingGetRequest) -> operations.CreateAuthorIfNotExistsForUsingGetResponse:
        r"""this functions helps you to map your application author ids to Etherpad author ids
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createAuthorIfNotExistsFor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAuthorIfNotExistsForUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingGet200ApplicationJSON])
                res.create_author_if_not_exists_for_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingGet400ApplicationJSON])
                res.create_author_if_not_exists_for_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingGet401ApplicationJSON])
                res.create_author_if_not_exists_for_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingGet500ApplicationJSON])
                res.create_author_if_not_exists_for_using_get_500_application_json_object = out

        return res

    
    def create_author_if_not_exists_for_using_post(self, request: operations.CreateAuthorIfNotExistsForUsingPostRequest) -> operations.CreateAuthorIfNotExistsForUsingPostResponse:
        r"""this functions helps you to map your application author ids to Etherpad author ids
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createAuthorIfNotExistsFor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAuthorIfNotExistsForUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingPost200ApplicationJSON])
                res.create_author_if_not_exists_for_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingPost400ApplicationJSON])
                res.create_author_if_not_exists_for_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingPost401ApplicationJSON])
                res.create_author_if_not_exists_for_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorIfNotExistsForUsingPost500ApplicationJSON])
                res.create_author_if_not_exists_for_using_post_500_application_json_object = out

        return res

    
    def create_author_using_get(self, request: operations.CreateAuthorUsingGetRequest) -> operations.CreateAuthorUsingGetResponse:
        r"""creates a new author
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAuthorUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingGet200ApplicationJSON])
                res.create_author_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingGet400ApplicationJSON])
                res.create_author_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingGet401ApplicationJSON])
                res.create_author_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingGet500ApplicationJSON])
                res.create_author_using_get_500_application_json_object = out

        return res

    
    def create_author_using_post(self, request: operations.CreateAuthorUsingPostRequest) -> operations.CreateAuthorUsingPostResponse:
        r"""creates a new author
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAuthorUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingPost200ApplicationJSON])
                res.create_author_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingPost400ApplicationJSON])
                res.create_author_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingPost401ApplicationJSON])
                res.create_author_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAuthorUsingPost500ApplicationJSON])
                res.create_author_using_post_500_application_json_object = out

        return res

    
    def get_author_name_using_get(self, request: operations.GetAuthorNameUsingGetRequest) -> operations.GetAuthorNameUsingGetResponse:
        r"""Returns the Author Name of the author
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getAuthorName"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthorNameUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingGet200ApplicationJSON])
                res.get_author_name_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingGet400ApplicationJSON])
                res.get_author_name_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingGet401ApplicationJSON])
                res.get_author_name_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingGet500ApplicationJSON])
                res.get_author_name_using_get_500_application_json_object = out

        return res

    
    def get_author_name_using_post(self, request: operations.GetAuthorNameUsingPostRequest) -> operations.GetAuthorNameUsingPostResponse:
        r"""Returns the Author Name of the author
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getAuthorName"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthorNameUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingPost200ApplicationJSON])
                res.get_author_name_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingPost400ApplicationJSON])
                res.get_author_name_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingPost401ApplicationJSON])
                res.get_author_name_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAuthorNameUsingPost500ApplicationJSON])
                res.get_author_name_using_post_500_application_json_object = out

        return res

    
    def list_pads_of_author_using_get(self, request: operations.ListPadsOfAuthorUsingGetRequest) -> operations.ListPadsOfAuthorUsingGetResponse:
        r"""returns an array of all pads this author contributed to
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listPadsOfAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPadsOfAuthorUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingGet200ApplicationJSON])
                res.list_pads_of_author_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingGet400ApplicationJSON])
                res.list_pads_of_author_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingGet401ApplicationJSON])
                res.list_pads_of_author_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingGet500ApplicationJSON])
                res.list_pads_of_author_using_get_500_application_json_object = out

        return res

    
    def list_pads_of_author_using_post(self, request: operations.ListPadsOfAuthorUsingPostRequest) -> operations.ListPadsOfAuthorUsingPostResponse:
        r"""returns an array of all pads this author contributed to
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listPadsOfAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPadsOfAuthorUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingPost200ApplicationJSON])
                res.list_pads_of_author_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingPost400ApplicationJSON])
                res.list_pads_of_author_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingPost401ApplicationJSON])
                res.list_pads_of_author_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPadsOfAuthorUsingPost500ApplicationJSON])
                res.list_pads_of_author_using_post_500_application_json_object = out

        return res

    
    def list_sessions_of_author_using_get(self, request: operations.ListSessionsOfAuthorUsingGetRequest) -> operations.ListSessionsOfAuthorUsingGetResponse:
        r"""returns all sessions of an author
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listSessionsOfAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSessionsOfAuthorUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingGet200ApplicationJSON])
                res.list_sessions_of_author_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingGet400ApplicationJSON])
                res.list_sessions_of_author_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingGet401ApplicationJSON])
                res.list_sessions_of_author_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingGet500ApplicationJSON])
                res.list_sessions_of_author_using_get_500_application_json_object = out

        return res

    
    def list_sessions_of_author_using_post(self, request: operations.ListSessionsOfAuthorUsingPostRequest) -> operations.ListSessionsOfAuthorUsingPostResponse:
        r"""returns all sessions of an author
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listSessionsOfAuthor"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSessionsOfAuthorUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingPost200ApplicationJSON])
                res.list_sessions_of_author_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingPost400ApplicationJSON])
                res.list_sessions_of_author_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingPost401ApplicationJSON])
                res.list_sessions_of_author_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSessionsOfAuthorUsingPost500ApplicationJSON])
                res.list_sessions_of_author_using_post_500_application_json_object = out

        return res

    