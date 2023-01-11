import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteTransactionRulesTransactionRuleIDPathParams:
    transaction_rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transactionRuleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTransactionRulesTransactionRuleIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteTransactionRulesTransactionRuleIDRequest:
    path_params: DeleteTransactionRulesTransactionRuleIDPathParams = dataclasses.field()
    security: DeleteTransactionRulesTransactionRuleIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTransactionRulesTransactionRuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rest_service_error: Optional[Any] = dataclasses.field(default=None)
    transaction_rule: Optional[Any] = dataclasses.field(default=None)
    
