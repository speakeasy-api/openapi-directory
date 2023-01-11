import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Other:
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

    
    def categories_list(self) -> operations.CategoriesListResponse:
        r"""Public Categories
        Returns a list of public categories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CategoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Category]])
                res.categories = out
        elif r.status_code == 500:
            pass

        return res

    
    def file_download(self, request: operations.FileDownloadRequest) -> operations.FileDownloadResponse:
        r"""Public File Download
        Starts the download of a file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/file/download/{file_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FileDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def licenses_list(self) -> operations.LicensesListResponse:
        r"""Public Licenses
        Returns a list of public licenses
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/licenses"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.License]])
                res.licenses = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_account(self, request: operations.PrivateAccountRequest) -> operations.PrivateAccountResponse:
        r"""Private Account information
        Account information for token/personal token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_funding_search(self, request: operations.PrivateFundingSearchRequest) -> operations.PrivateFundingSearchResponse:
        r"""Search Funding
        Search for fundings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/funding/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateFundingSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.FundingInformation]])
                res.funding_informations = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_licenses_list(self, request: operations.PrivateLicensesListRequest) -> operations.PrivateLicensesListResponse:
        r"""Private Account Licenses
        This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/licenses"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateLicensesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.License]])
                res.licenses = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    