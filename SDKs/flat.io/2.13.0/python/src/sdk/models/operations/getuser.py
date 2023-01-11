import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import userpublic as shared_userpublic


@dataclasses.dataclass
class GetUserPathParams:
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserRequest:
    path_params: GetUserPathParams = dataclasses.field()
    security: GetUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    user_public: Optional[shared_userpublic.UserPublic] = dataclasses.field(default=None)
    
