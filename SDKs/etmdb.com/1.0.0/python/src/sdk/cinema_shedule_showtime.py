import requests
from sdk.models import operations
from . import utils

class CinemaSheduleShowtime:
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

    
    def cinema_shedule_showtime_search_read(self, request: operations.CinemaSheduleShowtimeSearchReadRequest) -> operations.CinemaSheduleShowtimeSearchReadResponse:
        r"""Return cinema schedule and showtime search result
        Return cinema schedule and showtime search result
        
        ### Response Class (Status 200)
        * __{movie_title}__: Used as a key word to search movie cast
        * You can use both Amharic or English charset/font to search
        
        For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/cinema-shedule-showtime/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaSheduleShowtimeSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def cinema_shedule_showtime_searchall_read(self, request: operations.CinemaSheduleShowtimeSearchallReadRequest) -> operations.CinemaSheduleShowtimeSearchallReadResponse:
        r"""Return cinema schedule and showtime search result
        Return cinema schedule and showtime search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * movie title
        * cinema name
        * cinema hall name
        * showtime starting date
        * showtime ending date or
        * cinema technology
        
        For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/cinema-shedule-showtime/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CinemaSheduleShowtimeSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    