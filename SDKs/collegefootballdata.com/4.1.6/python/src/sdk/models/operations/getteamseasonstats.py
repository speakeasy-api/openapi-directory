import dataclasses
from typing import Optional
from ..shared import teamseasonstat as shared_teamseasonstat


@dataclasses.dataclass
class GetTeamSeasonStatsQueryParams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    end_week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endWeek', 'style': 'form', 'explode': True }})
    start_week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startWeek', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeamSeasonStatsRequest:
    query_params: GetTeamSeasonStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamSeasonStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_season_stats: Optional[list[shared_teamseasonstat.TeamSeasonStat]] = dataclasses.field(default=None)
    
