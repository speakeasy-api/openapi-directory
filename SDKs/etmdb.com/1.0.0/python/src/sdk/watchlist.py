import requests
from sdk.models import operations
from . import utils

class Watchlist:
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

    
    def watchlist_search_read(self, request: operations.WatchlistSearchReadRequest) -> operations.WatchlistSearchReadResponse:
        r"""Return watchlist search result
        Return watchlist search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search movies on watchlist
        * You can use both Amharic or English charset/font to search
        
        For more details on how watchlist are listed [see here][ref].
        [ref]: https://etmdb.com/en/movies/watchlist/id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/watchlist/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WatchlistSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def watchlist_searchall_read(self, request: operations.WatchlistSearchallReadRequest) -> operations.WatchlistSearchallReadResponse:
        r"""Return watchlist search result
        Return watchlist search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * artist first name
        * artist last name
        * artist username
        * movie title or
        
        For more details on how watchlist are listed [see here][ref].
        [ref]: https://etmdb.com/en/movies/watchlist/id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/watchlist/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WatchlistSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    