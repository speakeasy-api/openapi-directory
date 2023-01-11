import dataclasses
from typing import Optional
from ..shared import team as shared_team


@dataclasses.dataclass
class GetTeamsQueryParams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeamsRequest:
    query_params: GetTeamsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    
