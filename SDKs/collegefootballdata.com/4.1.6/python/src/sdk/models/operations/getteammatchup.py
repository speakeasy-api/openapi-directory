import dataclasses
from typing import Optional
from ..shared import teammatchup as shared_teammatchup


@dataclasses.dataclass
class GetTeamMatchupQueryParams:
    team1: str = dataclasses.field(metadata={'query_param': { 'field_name': 'team1', 'style': 'form', 'explode': True }})
    team2: str = dataclasses.field(metadata={'query_param': { 'field_name': 'team2', 'style': 'form', 'explode': True }})
    max_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxYear', 'style': 'form', 'explode': True }})
    min_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minYear', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeamMatchupRequest:
    query_params: GetTeamMatchupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamMatchupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_matchup: Optional[shared_teammatchup.TeamMatchup] = dataclasses.field(default=None)
    
