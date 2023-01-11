import dataclasses
from typing import Optional
from ..shared import commit_comment as shared_commit_comment


@dataclasses.dataclass
class ReposListCommitCommentsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListCommitCommentsForRepoQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListCommitCommentsForRepoRequest:
    path_params: ReposListCommitCommentsForRepoPathParams = dataclasses.field()
    query_params: ReposListCommitCommentsForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListCommitCommentsForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    commit_comments: Optional[list[shared_commit_comment.CommitComment]] = dataclasses.field(default=None)
    
