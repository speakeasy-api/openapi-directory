import dataclasses
from typing import Optional
from ..shared import teamgame as shared_teamgame


@dataclasses.dataclass
class GetTeamGameStatsQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    game_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeamGameStatsRequest:
    query_params: GetTeamGameStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamGameStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_games: Optional[list[shared_teamgame.TeamGame]] = dataclasses.field(default=None)
    
