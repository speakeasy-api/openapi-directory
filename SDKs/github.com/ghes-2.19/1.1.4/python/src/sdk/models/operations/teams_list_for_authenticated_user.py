import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import team_full as shared_team_full


@dataclasses.dataclass
class TeamsListForAuthenticatedUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListForAuthenticatedUserRequest:
    query_params: TeamsListForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    team_fulls: Optional[list[shared_team_full.TeamFull]] = dataclasses.field(default=None)
    
