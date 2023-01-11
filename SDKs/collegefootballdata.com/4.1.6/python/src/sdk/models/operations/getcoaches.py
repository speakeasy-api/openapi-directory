import dataclasses
from typing import Optional
from ..shared import coach as shared_coach


@dataclasses.dataclass
class GetCoachesQueryParams:
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'firstName', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lastName', 'style': 'form', 'explode': True }})
    max_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxYear', 'style': 'form', 'explode': True }})
    min_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minYear', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCoachesRequest:
    query_params: GetCoachesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCoachesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    coaches: Optional[list[shared_coach.Coach]] = dataclasses.field(default=None)
    
