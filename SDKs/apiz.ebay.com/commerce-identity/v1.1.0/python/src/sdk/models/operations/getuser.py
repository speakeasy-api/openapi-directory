import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import userresponse as shared_userresponse


@dataclasses.dataclass
class GetUserSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserRequest:
    security: GetUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_response: Optional[shared_userresponse.UserResponse] = dataclasses.field(default=None)
    
