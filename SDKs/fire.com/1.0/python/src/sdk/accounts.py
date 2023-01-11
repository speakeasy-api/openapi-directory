import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def add_account(self, request: operations.AddAccountRequest) -> operations.AddAccountResponse:
        r"""Add a new account
        Creates a new fire.com account.
        
        **Please note there is a charge associated with creating a new account.**
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems])
                res.oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items = out

        return res

    
    def get_account_by_id(self, request: operations.GetAccountByIDRequest) -> operations.GetAccountByIDResponse:
        r"""Retrieve the details of a fire.com Account
        You can retrieve the details of a fire.com Account by its `ican`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{ican}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems])
                res.oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_accounts(self) -> operations.GetAccountsResponse:
        r"""List all fire.com Accounts
        Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountsAccounts])
                res.accounts = out
        elif r.status_code == 401:
            pass

        return res

    