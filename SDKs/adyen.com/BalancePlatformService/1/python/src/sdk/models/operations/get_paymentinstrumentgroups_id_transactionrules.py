import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPaymentInstrumentGroupsIDTransactionRulesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentInstrumentGroupsIDTransactionRulesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetPaymentInstrumentGroupsIDTransactionRulesRequest:
    path_params: GetPaymentInstrumentGroupsIDTransactionRulesPathParams = dataclasses.field()
    security: GetPaymentInstrumentGroupsIDTransactionRulesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentInstrumentGroupsIDTransactionRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rest_service_error: Optional[Any] = dataclasses.field(default=None)
    transaction_rules_response: Optional[Any] = dataclasses.field(default=None)
    
