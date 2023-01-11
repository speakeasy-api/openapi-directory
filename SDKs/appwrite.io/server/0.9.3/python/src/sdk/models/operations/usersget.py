import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import user as shared_user


@dataclasses.dataclass
class UsersGetPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersGetSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UsersGetRequest:
    path_params: UsersGetPathParams = dataclasses.field()
    security: UsersGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UsersGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
