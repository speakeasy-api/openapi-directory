import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import userprofilesgroup as shared_userprofilesgroup


@dataclasses.dataclass
class UserGroupsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserGroupsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserGroupsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UserGroupsReadRequest:
    path_params: UserGroupsReadPathParams = dataclasses.field()
    query_params: UserGroupsReadQueryParams = dataclasses.field()
    security: UserGroupsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserGroupsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_profiles_group: Optional[shared_userprofilesgroup.UserProfilesGroup] = dataclasses.field(default=None)
    
