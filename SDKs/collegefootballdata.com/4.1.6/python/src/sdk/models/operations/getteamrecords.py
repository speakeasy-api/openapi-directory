import dataclasses
from typing import Optional
from ..shared import teamrecord as shared_teamrecord


@dataclasses.dataclass
class GetTeamRecordsQueryParams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeamRecordsRequest:
    query_params: GetTeamRecordsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamRecordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_records: Optional[list[shared_teamrecord.TeamRecord]] = dataclasses.field(default=None)
    
