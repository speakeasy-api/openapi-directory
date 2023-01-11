import dataclasses
from typing import Optional
from enum import Enum
from ..shared import team_id_enum as shared_team_id_enum
from ..shared import basic_error as shared_basic_error
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class TeamsListMembersLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListMembersLegacyQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    role: Optional[shared_team_id_enum.TeamIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListMembersLegacyRequest:
    path_params: TeamsListMembersLegacyPathParams = dataclasses.field()
    query_params: TeamsListMembersLegacyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListMembersLegacyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
