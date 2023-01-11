import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import issue_comment as shared_issue_comment


@dataclasses.dataclass
class IssuesGetCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesGetCommentRequest:
    path_params: IssuesGetCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesGetCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    issue_comment: Optional[shared_issue_comment.IssueComment] = dataclasses.field(default=None)
    
