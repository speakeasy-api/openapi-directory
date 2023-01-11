import dataclasses
from typing import Optional
from enum import Enum
from ..shared import role_enum as shared_role_enum
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class CountOrgaUsersQueryParams:
    group: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    no_active_license: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'noActiveLicense', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[list[shared_role_enum.RoleEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CountOrgaUsersSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CountOrgaUsersRequest:
    query_params: CountOrgaUsersQueryParams = dataclasses.field()
    security: CountOrgaUsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CountOrgaUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    count_orga_users_200_application_json_integer: Optional[int] = dataclasses.field(default=None)
    
