import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comment_id_enum as shared_comment_id_enum
from ..shared import basic_error as shared_basic_error
from ..shared import reaction as shared_reaction


@dataclasses.dataclass
class ReactionsListForIssueCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsListForIssueCommentQueryParams:
    content: Optional[shared_comment_id_enum.CommentIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ReactionsListForIssueComment415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReactionsListForIssueCommentRequest:
    path_params: ReactionsListForIssueCommentPathParams = dataclasses.field()
    query_params: ReactionsListForIssueCommentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsListForIssueCommentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    reactions: Optional[list[shared_reaction.Reaction]] = dataclasses.field(default=None)
    reactions_list_for_issue_comment_415_application_json_object: Optional[ReactionsListForIssueComment415ApplicationJSON] = dataclasses.field(default=None)
    
