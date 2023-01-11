import dataclasses
from typing import Optional
from enum import Enum
from ..shared import team_id_enum1 as shared_team_id_enum1
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class TeamsListMembersPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListMembersQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    role: Optional[shared_team_id_enum1.TeamIDEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListMembersRequest:
    path_params: TeamsListMembersPathParams = dataclasses.field()
    query_params: TeamsListMembersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListMembersResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
