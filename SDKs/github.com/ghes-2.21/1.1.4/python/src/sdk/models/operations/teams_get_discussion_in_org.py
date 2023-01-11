import dataclasses
from typing import Optional
from ..shared import team_discussion as shared_team_discussion


@dataclasses.dataclass
class TeamsGetDiscussionInOrgPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsGetDiscussionInOrgRequest:
    path_params: TeamsGetDiscussionInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsGetDiscussionInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion: Optional[shared_team_discussion.TeamDiscussion] = dataclasses.field(default=None)
    
