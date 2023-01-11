import requests
from sdk.models import operations
from . import utils

class Movie:
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

    
    def movie_search_read(self, request: operations.MovieSearchReadRequest) -> operations.MovieSearchReadResponse:
        r"""Return movie search result
        Return movie search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search movies
        * You can use both Amharic or English charset/font to search
        
        For more details on how movies are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/movie/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MovieSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    