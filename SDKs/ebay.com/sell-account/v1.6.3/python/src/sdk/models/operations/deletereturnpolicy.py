import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteReturnPolicyPathParams:
    return_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'return_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteReturnPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteReturnPolicyRequest:
    path_params: DeleteReturnPolicyPathParams = dataclasses.field()
    security: DeleteReturnPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteReturnPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
