import requests
from sdk.models import operations
from . import utils

class Showtime:
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

    
    def showtime_searchall_read(self, request: operations.ShowtimeSearchallReadRequest) -> operations.ShowtimeSearchallReadResponse:
        r"""Return showtime search result
        Return showtime search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * show time or
        * day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]
        
        For more details about showtime, check each cinema from the cinema list [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/showtime/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowtimeSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    