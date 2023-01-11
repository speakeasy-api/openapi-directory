import dataclasses
from typing import Optional
from ..shared import team_2 as shared_team_2


@dataclasses.dataclass
class TeamsListChildPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListChildQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListChildRequest:
    path_params: TeamsListChildPathParams = dataclasses.field()
    query_params: TeamsListChildQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListChildResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_2s: Optional[list[shared_team_2.Team2]] = dataclasses.field(default=None)
    
