import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import usercreation as shared_usercreation
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import userdetailsadmin as shared_userdetailsadmin


@dataclasses.dataclass
class CreateOrganizationUserSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateOrganizationUserRequest:
    security: CreateOrganizationUserSecurity = dataclasses.field()
    request: Optional[shared_usercreation.UserCreation] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    user_details_admin: Optional[shared_userdetailsadmin.UserDetailsAdmin] = dataclasses.field(default=None)
    
