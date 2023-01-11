import dataclasses
from typing import Optional
from ..shared import teamrecruitingrank as shared_teamrecruitingrank


@dataclasses.dataclass
class GetRecruitingTeamsQueryParams:
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRecruitingTeamsRequest:
    query_params: GetRecruitingTeamsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRecruitingTeamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_recruiting_ranks: Optional[list[shared_teamrecruitingrank.TeamRecruitingRank]] = dataclasses.field(default=None)
    
