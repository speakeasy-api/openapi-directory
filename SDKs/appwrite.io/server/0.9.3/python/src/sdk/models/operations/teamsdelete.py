import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class TeamsDeletePathParams:
    team_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsDeleteSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class TeamsDeleteRequest:
    path_params: TeamsDeletePathParams = dataclasses.field()
    security: TeamsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TeamsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
