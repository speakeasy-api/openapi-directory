"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import restserviceerror as shared_restserviceerror
from ..shared import transactionsearchresponse as shared_transactionsearchresponse
from datetime import datetime
from typing import Optional


@dataclasses.dataclass
class GetTransactionsSecurity:
    
    api_key_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-API-Key' }})  
    

@dataclasses.dataclass
class GetTransactionsRequest:
    
    created_since: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'createdSince', 'style': 'form', 'explode': True }})
    r"""Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**."""  
    created_until: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'createdUntil', 'style': 'form', 'explode': True }})
    r"""Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**."""  
    account_holder_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountHolderId', 'style': 'form', 'explode': True }})
    r"""Unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id)."""  
    balance_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'balanceAccountId', 'style': 'form', 'explode': True }})
    r"""Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id)."""  
    balance_platform: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'balancePlatform', 'style': 'form', 'explode': True }})
    r"""Unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id)."""  
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    r"""The `cursor` returned in the links of the previous response."""  
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    r"""The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page."""  
    payment_instrument_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paymentInstrumentId', 'style': 'form', 'explode': True }})
    r"""Unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_)."""  
    

@dataclasses.dataclass
class GetTransactionsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    rest_service_error: Optional[shared_restserviceerror.RestServiceError] = dataclasses.field(default=None)
    r"""Unauthorized - authentication required."""  
    transaction_search_response: Optional[shared_transactionsearchresponse.TransactionSearchResponse] = dataclasses.field(default=None)
    r"""OK - the request has succeeded."""  
    