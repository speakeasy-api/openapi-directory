import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Transactions:
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

    
    def get_transactions_by_id(self, request: operations.GetTransactionsByIDRequest) -> operations.GetTransactionsByIDResponse:
        r"""List transactions for an account
        Retrieve a list of transactions against an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{ican}/transactions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransactionsByIDTransaction])
                res.transaction = out

        return res

    
    def get_transactions_filtered_by_id(self, request: operations.GetTransactionsFilteredByIDRequest) -> operations.GetTransactionsFilteredByIDResponse:
        r"""Filtered list of transactions for an account
        Retrieve a filtered list of transactions against an account.
        * `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
        * `dateRangeTo` - A millisecond epoch time specifying the date range end date.
        * `searchKeyword` - Search term to filter by from the reference field (`myRef`).
        * `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{ican}/transactions/filter", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsFilteredByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema])
                res.oneaccounts_1_percent_7_bican_percent_7_d_1transactions_get_responses_200_content_application_1json_schema = out

        return res

    