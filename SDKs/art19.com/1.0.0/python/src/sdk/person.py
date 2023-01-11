import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Person:
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

    
    def get_people(self, request: operations.GetPeopleRequest) -> operations.GetPeopleResponse:
        r"""Get a list of people
        Each series, season, and episode has a Credits section where you may add people and roles.
        This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
        Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/people"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeopleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPeople200ApplicationVndAPIPlusJSON])
                res.get_people_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPeople400ApplicationVndAPIPlusJSON])
                res.get_people_400_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    
    def get_people_id_(self, request: operations.GetPeopleIDRequest) -> operations.GetPeopleIDResponse:
        r"""Get a specific person
        Each series, season, and episode has a Credits section where you may add people and roles.
        This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
        Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/people/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeopleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPeopleID200ApplicationVndAPIPlusJSON])
                res.get_people_id_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    