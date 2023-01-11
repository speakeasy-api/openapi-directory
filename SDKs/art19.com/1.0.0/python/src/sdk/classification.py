import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Classification:
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

    
    def get_classifications(self, request: operations.GetClassificationsRequest) -> operations.GetClassificationsResponse:
        r"""Get a list of classifications
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/classifications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClassificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClassifications200ApplicationVndAPIPlusJSON])
                res.get_classifications_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClassifications400ApplicationVndAPIPlusJSON])
                res.get_classifications_400_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    
    def get_classifications_id_(self, request: operations.GetClassificationsIDRequest) -> operations.GetClassificationsIDResponse:
        r"""Get a specific classification
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classifications/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClassificationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClassificationsID200ApplicationVndAPIPlusJSON])
                res.get_classifications_id_200_application_vnd_api_plus_json_object = out
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

    