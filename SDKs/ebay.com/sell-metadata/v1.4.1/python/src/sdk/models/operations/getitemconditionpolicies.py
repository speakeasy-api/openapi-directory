import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import itemconditionpolicyresponse as shared_itemconditionpolicyresponse


@dataclasses.dataclass
class GetItemConditionPoliciesPathParams:
    marketplace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetItemConditionPoliciesQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetItemConditionPoliciesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetItemConditionPoliciesRequest:
    path_params: GetItemConditionPoliciesPathParams = dataclasses.field()
    query_params: GetItemConditionPoliciesQueryParams = dataclasses.field()
    security: GetItemConditionPoliciesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetItemConditionPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_condition_policy_response: Optional[shared_itemconditionpolicyresponse.ItemConditionPolicyResponse] = dataclasses.field(default=None)
    
