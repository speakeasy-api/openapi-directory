import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import commit_comment as shared_commit_comment


@dataclasses.dataclass
class ReposGetCommitCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetCommitCommentRequest:
    path_params: ReposGetCommitCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetCommitCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    commit_comment: Optional[shared_commit_comment.CommitComment] = dataclasses.field(default=None)
    
