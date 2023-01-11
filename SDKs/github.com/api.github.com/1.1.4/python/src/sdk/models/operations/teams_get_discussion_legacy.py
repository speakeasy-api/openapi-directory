import dataclasses
from typing import Optional
from ..shared import team_discussion as shared_team_discussion


@dataclasses.dataclass
class TeamsGetDiscussionLegacyPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetDiscussionLegacyRequest:
    path_params: TeamsGetDiscussionLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetDiscussionLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion: Optional[shared_team_discussion.TeamDiscussion] = dataclasses.field(default=None)
    
