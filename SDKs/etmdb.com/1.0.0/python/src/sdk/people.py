import requests
from sdk.models import operations
from . import utils

class People:
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

    
    def people_search_read(self, request: operations.PeopleSearchReadRequest) -> operations.PeopleSearchReadResponse:
        r"""Return cast search result
        Return cast search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * artist first name
        * artist last name
        * artist username
        
        For more details on how cast are listed [see here][ref].
        [ref]: https://etmdb.com/en/cast-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/people/search/{user}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    