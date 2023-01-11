import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import useradminupdate as shared_useradminupdate
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import userdetailsadmin as shared_userdetailsadmin


@dataclasses.dataclass
class UpdateOrganizationUserPathParams:
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateOrganizationUserSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateOrganizationUserRequest:
    path_params: UpdateOrganizationUserPathParams = dataclasses.field()
    request: shared_useradminupdate.UserAdminUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateOrganizationUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateOrganizationUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    user_details_admin: Optional[shared_userdetailsadmin.UserDetailsAdmin] = dataclasses.field(default=None)
    
