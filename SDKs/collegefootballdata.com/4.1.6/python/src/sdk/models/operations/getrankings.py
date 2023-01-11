import dataclasses
from typing import Optional
from ..shared import rankingweek as shared_rankingweek


@dataclasses.dataclass
class GetRankingsQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRankingsRequest:
    query_params: GetRankingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRankingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ranking_weeks: Optional[list[shared_rankingweek.RankingWeek]] = dataclasses.field(default=None)
    
