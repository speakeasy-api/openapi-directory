"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import restserviceerror as shared_restserviceerror
from ..shared import security as shared_security
from ..shared import transactionrulesresponse as shared_transactionrulesresponse
from typing import Optional


@dataclasses.dataclass
class GetPaymentInstrumentGroupsIDTransactionRulesSecurity:
    
    api_key_auth: Optional[str] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-API-Key' }})  
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})  
    

@dataclasses.dataclass
class GetPaymentInstrumentGroupsIDTransactionRulesRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the payment instrument group."""  
    

@dataclasses.dataclass
class GetPaymentInstrumentGroupsIDTransactionRulesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    rest_service_error: Optional[shared_restserviceerror.RestServiceError] = dataclasses.field(default=None)
    r"""Bad Request - a problem reading or understanding the request."""  
    transaction_rules_response: Optional[shared_transactionrulesresponse.TransactionRulesResponse] = dataclasses.field(default=None)
    r"""OK - the request has succeeded."""  
    