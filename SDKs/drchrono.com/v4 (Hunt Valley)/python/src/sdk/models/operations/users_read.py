import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import userprofile as shared_userprofile


@dataclasses.dataclass
class UsersReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UsersReadRequest:
    path_params: UsersReadPathParams = dataclasses.field()
    query_params: UsersReadQueryParams = dataclasses.field()
    security: UsersReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UsersReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_profile: Optional[shared_userprofile.UserProfile] = dataclasses.field(default=None)
    
