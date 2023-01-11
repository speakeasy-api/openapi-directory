import requests
from sdk.models import operations
from . import utils

class Job:
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

    
    def job_search_read(self, request: operations.JobSearchReadRequest) -> operations.JobSearchReadResponse:
        r"""Return job details search result
        Return job details search result
        
        ### Response Class (Status 200)
        
        * __{job_title}__: Used as a key word to search jobs,
        
        For more details on how job are listed [see here][ref].
        [ref]: https://etmdb.com/en/job-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/job/search/{job_title}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JobSearchReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def job_searchall_read(self, request: operations.JobSearchallReadRequest) -> operations.JobSearchallReadResponse:
        r"""Return job details search result
        Return job details search result
        
        ### Response Class (Status 200)
        
        * __{company_name}__: Used as a key word to search jobs,
        
        For more details on how job are listed [see here][ref].
        [ref]: https://etmdb.com/en/job-list/-updated_date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/job/searchall/{company_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JobSearchallReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    