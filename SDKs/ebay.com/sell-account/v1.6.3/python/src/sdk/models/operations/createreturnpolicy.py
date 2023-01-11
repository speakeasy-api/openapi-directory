import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import returnpolicyrequest as shared_returnpolicyrequest
from ..shared import setreturnpolicyresponse as shared_setreturnpolicyresponse


@dataclasses.dataclass
class CreateReturnPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateReturnPolicyRequest:
    request: shared_returnpolicyrequest.ReturnPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateReturnPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateReturnPolicyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    set_return_policy_response: Optional[shared_setreturnpolicyresponse.SetReturnPolicyResponse] = dataclasses.field(default=None)
    
