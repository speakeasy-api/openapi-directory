import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class AddClassUserPathParams:
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddClassUserSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddClassUserRequest:
    path_params: AddClassUserPathParams = dataclasses.field()
    security: AddClassUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddClassUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
