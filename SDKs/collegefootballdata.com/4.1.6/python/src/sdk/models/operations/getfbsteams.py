import dataclasses
from typing import Optional
from ..shared import team as shared_team


@dataclasses.dataclass
class GetFbsTeamsQueryParams:
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFbsTeamsRequest:
    query_params: GetFbsTeamsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFbsTeamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    
