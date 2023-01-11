import requests
from sdk.models import operations
from . import utils

class Search:
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

    
    def get_search_aspect_id_fullsearch(self, request: operations.GetSearchAspectIDFullsearchRequest) -> operations.GetSearchAspectIDFullsearchResponse:
        r"""A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{aspectId}/fullsearch", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchAspectIDFullsearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    