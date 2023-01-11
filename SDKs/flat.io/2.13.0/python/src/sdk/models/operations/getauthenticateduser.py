import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import userdetails as shared_userdetails


@dataclasses.dataclass
class GetAuthenticatedUserQueryParams:
    only_id: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onlyId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAuthenticatedUserSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAuthenticatedUserRequest:
    query_params: GetAuthenticatedUserQueryParams = dataclasses.field()
    security: GetAuthenticatedUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    user_details: Optional[shared_userdetails.UserDetails] = dataclasses.field(default=None)
    
