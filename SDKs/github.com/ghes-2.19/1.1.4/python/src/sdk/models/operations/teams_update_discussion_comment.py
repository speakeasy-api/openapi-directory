import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_discussion_comment as shared_team_discussion_comment


@dataclasses.dataclass
class TeamsUpdateDiscussionCommentPathParams:
    comment_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsUpdateDiscussionCommentRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclasses.dataclass
class TeamsUpdateDiscussionCommentRequest:
    path_params: TeamsUpdateDiscussionCommentPathParams = dataclasses.field()
    request: Optional[TeamsUpdateDiscussionCommentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsUpdateDiscussionCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_discussion_comment: Optional[shared_team_discussion_comment.TeamDiscussionComment] = dataclasses.field(default=None)
    
