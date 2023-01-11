import requests
from sdk.models import operations
from . import utils

class CompanyCredits:
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

    
    def company_credits_search_read(self, request: operations.CompanyCreditsSearchReadRequest) -> operations.CompanyCreditsSearchReadResponse:
        r"""Return company credits search result
        Return company credits search result
        
        ### Response Class (Status 200)
        
        * __{movie_title}__: Used as a key word to search company credits for the movie
        * You can use both Amharic or English charset/font to search
        
        For more details on how company credits are listed [see here][ref].
        [ref]: https://etmdb.com/en/movie-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company-credits/search/{movie_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyCreditsSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def company_credits_searchall_read(self, request: operations.CompanyCreditsSearchallReadRequest) -> operations.CompanyCreditsSearchallReadResponse:
        r"""Return company credits search result
        Return company credits search result
        
        ### Response Class (Status 200)
        __{param}__ argument can be
        * company name
        * movie title or
        * company credit description (such as production, cinematography, etc)
        
        For more details on how company credits are listed [see here][ref].
        [ref]: https://etmdb.com/en/company-list/company_name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/company-credits/searchall/{param}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanyCreditsSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    