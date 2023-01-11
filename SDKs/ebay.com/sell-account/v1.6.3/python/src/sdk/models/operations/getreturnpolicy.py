import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import returnpolicy as shared_returnpolicy


@dataclasses.dataclass
class GetReturnPolicyPathParams:
    return_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'return_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReturnPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetReturnPolicyRequest:
    path_params: GetReturnPolicyPathParams = dataclasses.field()
    security: GetReturnPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReturnPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    return_policy: Optional[shared_returnpolicy.ReturnPolicy] = dataclasses.field(default=None)
    
