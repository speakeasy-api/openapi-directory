import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_discussion_comment as shared_team_discussion_comment


@dataclasses.dataclass
class TeamsCreateDiscussionCommentInOrgPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsCreateDiscussionCommentInOrgRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclasses.dataclass
class TeamsCreateDiscussionCommentInOrgRequest:
    path_params: TeamsCreateDiscussionCommentInOrgPathParams = dataclasses.field()
    request: Optional[TeamsCreateDiscussionCommentInOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsCreateDiscussionCommentInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion_comment: Optional[shared_team_discussion_comment.TeamDiscussionComment] = dataclasses.field(default=None)
    
