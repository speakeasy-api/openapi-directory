import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import team_discussion as shared_team_discussion


@dataclasses.dataclass
class TeamsListDiscussionsInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListDiscussionsInOrgQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    pinned: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pinned', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListDiscussionsInOrgRequest:
    path_params: TeamsListDiscussionsInOrgPathParams = dataclasses.field()
    query_params: TeamsListDiscussionsInOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListDiscussionsInOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussions: Optional[list[shared_team_discussion.TeamDiscussion]] = dataclasses.field(default=None)
    
