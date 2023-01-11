import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import team_full as shared_team_full


@dataclasses.dataclass
class TeamsGetLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetLegacyRequest:
    path_params: TeamsGetLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    team_full: Optional[shared_team_full.TeamFull] = dataclasses.field(default=None)
    
