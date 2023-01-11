import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Series:
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

    
    def get_series(self, request: operations.GetSeriesRequest) -> operations.GetSeriesResponse:
        r"""Get a list of series
        When retrieving a list of series, the result is automatically filtered depending on the
        privileges the used credential holds. All credentials will have access to active series
        with a public page enabled (on ART19). Utilizing a filter to limit the result to series
        associated with your account is recommended.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSeries200ApplicationVndAPIPlusJSON])
                res.get_series_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSeries400ApplicationVndAPIPlusJSON])
                res.get_series_400_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    
    def get_series_id_(self, request: operations.GetSeriesIDRequest) -> operations.GetSeriesIDResponse:
        r"""Get a specific series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSeriesID200ApplicationVndAPIPlusJSON])
                res.get_series_id_200_application_vnd_api_plus_json_object = out
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

    