import requests
from typing import Optional
from sdk.models import operations
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

    
    def get_transaction(self, request: operations.GetTransactionRequest) -> operations.GetTransactionResponse:
        r"""Get a specific transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/transactions/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_transaction_cost(self, request: operations.GetTransactionCostRequest) -> operations.GetTransactionCostResponse:
        r"""Get a specific transaction's cost
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/transactions/{id}/cost", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionCostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_transactions(self, request: operations.GetTransactionsRequest) -> operations.GetTransactionsResponse:
        r"""Get a list of transactions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/transactions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransactions200ApplicationJSON])
                res.get_transactions_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    