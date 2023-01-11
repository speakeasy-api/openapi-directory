import dataclasses
from typing import Optional
from ..shared import team_discussion as shared_team_discussion


@dataclasses.dataclass
class TeamsGetDiscussionPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetDiscussionRequest:
    path_params: TeamsGetDiscussionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetDiscussionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion: Optional[shared_team_discussion.TeamDiscussion] = dataclasses.field(default=None)
    
