import dataclasses
from typing import Optional
from enum import Enum
from ..shared import team_id_enum as shared_team_id_enum
from ..shared import team_discussion as shared_team_discussion


@dataclasses.dataclass
class TeamsListDiscussionsPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListDiscussionsQueryParams:
    direction: Optional[shared_team_id_enum.TeamIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListDiscussionsRequest:
    path_params: TeamsListDiscussionsPathParams = dataclasses.field()
    query_params: TeamsListDiscussionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListDiscussionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussions: Optional[list[shared_team_discussion.TeamDiscussion]] = dataclasses.field(default=None)
    
