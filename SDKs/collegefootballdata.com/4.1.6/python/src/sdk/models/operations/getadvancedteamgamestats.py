import dataclasses
from typing import Optional
from ..shared import advancedgamestat as shared_advancedgamestat


@dataclasses.dataclass
class GetAdvancedTeamGameStatsQueryParams:
    exclude_garbage_time: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    opponent: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opponent', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAdvancedTeamGameStatsRequest:
    query_params: GetAdvancedTeamGameStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAdvancedTeamGameStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    advanced_game_stats: Optional[list[shared_advancedgamestat.AdvancedGameStat]] = dataclasses.field(default=None)
    
