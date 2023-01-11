import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class UsersDeletePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersDeleteSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UsersDeleteRequest:
    path_params: UsersDeletePathParams = dataclasses.field()
    security: UsersDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UsersDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
