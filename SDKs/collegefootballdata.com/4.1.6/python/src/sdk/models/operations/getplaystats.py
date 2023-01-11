import dataclasses
from typing import Optional
from ..shared import playstat as shared_playstat


@dataclasses.dataclass
class GetPlayStatsQueryParams:
    athlete_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'athleteId', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    game_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    stat_type_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'statTypeId', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlayStatsRequest:
    query_params: GetPlayStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlayStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    play_stats: Optional[list[shared_playstat.PlayStat]] = dataclasses.field(default=None)
    
