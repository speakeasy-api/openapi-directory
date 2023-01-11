import dataclasses
from typing import Optional
from ..shared import advancedseasonstat as shared_advancedseasonstat


@dataclasses.dataclass
class GetAdvancedTeamSeasonStatsQueryParams:
    end_week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endWeek', 'style': 'form', 'explode': True }})
    exclude_garbage_time: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    start_week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startWeek', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAdvancedTeamSeasonStatsRequest:
    query_params: GetAdvancedTeamSeasonStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAdvancedTeamSeasonStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    advanced_season_stats: Optional[list[shared_advancedseasonstat.AdvancedSeasonStat]] = dataclasses.field(default=None)
    
