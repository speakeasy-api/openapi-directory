import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import team as shared_team


@dataclasses.dataclass
class TeamsGetPathParams:
    team_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class TeamsGetRequest:
    path_params: TeamsGetPathParams = dataclasses.field()
    security: TeamsGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team: Optional[shared_team.Team] = dataclasses.field(default=None)
    
