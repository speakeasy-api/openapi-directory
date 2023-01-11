import dataclasses
from typing import Optional
from ..shared import teamsprating as shared_teamsprating


@dataclasses.dataclass
class GetSpRatingsQueryParams:
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSpRatingsRequest:
    query_params: GetSpRatingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpRatingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_sp_ratings: Optional[list[shared_teamsprating.TeamSpRating]] = dataclasses.field(default=None)
    
