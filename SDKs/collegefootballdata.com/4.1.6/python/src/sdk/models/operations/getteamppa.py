import dataclasses
from typing import Optional
from ..shared import teamppa as shared_teamppa


@dataclasses.dataclass
class GetTeamPpaQueryParams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    exclude_garbage_time: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeamPpaRequest:
    query_params: GetTeamPpaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamPpaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_ppas: Optional[list[shared_teamppa.TeamPpa]] = dataclasses.field(default=None)
    
