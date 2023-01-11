import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Episode:
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

    
    def get_episodes(self, request: operations.GetEpisodesRequest) -> operations.GetEpisodesResponse:
        r"""Get a list of episodes
        One initial filter must be provided (`ids`, `series_id`, or `season_id`), otherwise a `400 Bad Request` response
        will be returned. Additional filters are allowed.
        
        This API will only return episodes that your credential has permission to access, which may not be exclusive to
        your account, depending on the filter(s) being used. Be careful to filter the results as needed.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/episodes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEpisodes200ApplicationVndAPIPlusJSON])
                res.get_episodes_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEpisodes400ApplicationVndAPIPlusJSON])
                res.get_episodes_400_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    
    def get_episodes_id_(self, request: operations.GetEpisodesIDRequest) -> operations.GetEpisodesIDResponse:
        r"""Get a specific episode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEpisodesID200ApplicationVndAPIPlusJSON])
                res.get_episodes_id_200_application_vnd_api_plus_json_object = out
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

    
    def get_episodes_id_next_sibling(self, request: operations.GetEpisodesIDNextSiblingRequest) -> operations.GetEpisodesIDNextSiblingResponse:
        r"""Get the episode released right after the specified one
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{id}/next_sibling", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodesIDNextSiblingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEpisodesIDNextSibling200ApplicationVndAPIPlusJSON])
                res.get_episodes_id_next_sibling_200_application_vnd_api_plus_json_object = out
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

    
    def get_episodes_id_previous_sibling(self, request: operations.GetEpisodesIDPreviousSiblingRequest) -> operations.GetEpisodesIDPreviousSiblingResponse:
        r"""Get the episode released right before the specified one
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{id}/previous_sibling", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodesIDPreviousSiblingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEpisodesIDPreviousSibling200ApplicationVndAPIPlusJSON])
                res.get_episodes_id_previous_sibling_200_application_vnd_api_plus_json_object = out
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

    