import dataclasses
from typing import Optional
from ..shared import positiongrouprecruitingrating as shared_positiongrouprecruitingrating


@dataclasses.dataclass
class GetRecruitingGroupsQueryParams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    end_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endYear', 'style': 'form', 'explode': True }})
    start_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startYear', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRecruitingGroupsRequest:
    query_params: GetRecruitingGroupsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRecruitingGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    position_group_recruiting_ratings: Optional[list[shared_positiongrouprecruitingrating.PositionGroupRecruitingRating]] = dataclasses.field(default=None)
    
