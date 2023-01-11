import dataclasses
from typing import Optional
from ..shared import teamsrsrating as shared_teamsrsrating


@dataclasses.dataclass
class GetSrsRatingsQueryParams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSrsRatingsRequest:
    query_params: GetSrsRatingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSrsRatingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_srs_ratings: Optional[list[shared_teamsrsrating.TeamSrsRating]] = dataclasses.field(default=None)
    
