import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reaction as shared_reaction
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReactionsCreateForIssueCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReactionsCreateForIssueCommentRequestBodyContentEnum(str, Enum):
    PLUS_1 = "+1"
    MINUS_1 = "-1"
    LAUGH = "laugh"
    CONFUSED = "confused"
    HEART = "heart"
    HOORAY = "hooray"
    ROCKET = "rocket"
    EYES = "eyes"


@dataclass_json
@dataclasses.dataclass
class ReactionsCreateForIssueCommentRequestBody:
    content: ReactionsCreateForIssueCommentRequestBodyContentEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass_json
@dataclasses.dataclass
class ReactionsCreateForIssueComment415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReactionsCreateForIssueCommentRequest:
    path_params: ReactionsCreateForIssueCommentPathParams = dataclasses.field()
    request: Optional[ReactionsCreateForIssueCommentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReactionsCreateForIssueCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reaction: Optional[shared_reaction.Reaction] = dataclasses.field(default=None)
    reactions_create_for_issue_comment_415_application_json_object: Optional[ReactionsCreateForIssueComment415ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
