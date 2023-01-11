import dataclasses
from typing import Optional
from ..shared import playerseasonstat as shared_playerseasonstat


@dataclasses.dataclass
class GetPlayerSeasonStatsQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    end_week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endWeek', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    start_week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startWeek', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlayerSeasonStatsRequest:
    query_params: GetPlayerSeasonStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlayerSeasonStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_stats: Optional[list[shared_playerseasonstat.PlayerSeasonStat]] = dataclasses.field(default=None)
    
