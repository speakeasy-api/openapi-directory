import dataclasses
from typing import Optional
from ..shared import recruit as shared_recruit


@dataclasses.dataclass
class GetRecruitingPlayersQueryParams:
    classification: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classification', 'style': 'form', 'explode': True }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRecruitingPlayersRequest:
    query_params: GetRecruitingPlayersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRecruitingPlayersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    recruits: Optional[list[shared_recruit.Recruit]] = dataclasses.field(default=None)
    
