import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reaction as shared_reaction


@dataclasses.dataclass
class ReactionsCreateForTeamDiscussionCommentLegacyPathParams:
    comment_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum(str, Enum):
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
class ReactionsCreateForTeamDiscussionCommentLegacyRequestBody:
    content: ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclasses.dataclass
class ReactionsCreateForTeamDiscussionCommentLegacyRequest:
    path_params: ReactionsCreateForTeamDiscussionCommentLegacyPathParams = dataclasses.field()
    request: Optional[ReactionsCreateForTeamDiscussionCommentLegacyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReactionsCreateForTeamDiscussionCommentLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reaction: Optional[shared_reaction.Reaction] = dataclasses.field(default=None)
    
