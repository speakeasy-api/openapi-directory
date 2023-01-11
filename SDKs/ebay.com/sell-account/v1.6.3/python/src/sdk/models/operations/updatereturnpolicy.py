import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import returnpolicyrequest as shared_returnpolicyrequest
from ..shared import setreturnpolicyresponse as shared_setreturnpolicyresponse


@dataclasses.dataclass
class UpdateReturnPolicyPathParams:
    return_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'return_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateReturnPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateReturnPolicyRequest:
    path_params: UpdateReturnPolicyPathParams = dataclasses.field()
    request: shared_returnpolicyrequest.ReturnPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateReturnPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateReturnPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_return_policy_response: Optional[shared_setreturnpolicyresponse.SetReturnPolicyResponse] = dataclasses.field(default=None)
    
