import dataclasses
from typing import Optional
from ..shared import team_full as shared_team_full


@dataclasses.dataclass
class TeamsGetPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetRequest:
    path_params: TeamsGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_full: Optional[shared_team_full.TeamFull] = dataclasses.field(default=None)
    
