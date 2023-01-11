import dataclasses
from typing import Optional
from enum import Enum
from ..shared import team_slug_enum as shared_team_slug_enum
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class TeamsListMembersInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListMembersInOrgQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    role: Optional[shared_team_slug_enum.TeamSlugEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListMembersInOrgRequest:
    path_params: TeamsListMembersInOrgPathParams = dataclasses.field()
    query_params: TeamsListMembersInOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListMembersInOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
