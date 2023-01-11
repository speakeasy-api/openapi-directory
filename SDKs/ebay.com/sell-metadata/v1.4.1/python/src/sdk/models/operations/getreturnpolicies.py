import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import returnpolicyresponse as shared_returnpolicyresponse


@dataclasses.dataclass
class GetReturnPoliciesPathParams:
    marketplace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReturnPoliciesQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReturnPoliciesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetReturnPoliciesRequest:
    path_params: GetReturnPoliciesPathParams = dataclasses.field()
    query_params: GetReturnPoliciesQueryParams = dataclasses.field()
    security: GetReturnPoliciesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReturnPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    return_policy_response: Optional[shared_returnpolicyresponse.ReturnPolicyResponse] = dataclasses.field(default=None)
    
