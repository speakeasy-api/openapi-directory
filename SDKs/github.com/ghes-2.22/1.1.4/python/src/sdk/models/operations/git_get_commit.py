import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import git_commit as shared_git_commit


@dataclasses.dataclass
class GitGetCommitPathParams:
    commit_sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GitGetCommitRequest:
    path_params: GitGetCommitPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GitGetCommitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    git_commit: Optional[shared_git_commit.GitCommit] = dataclasses.field(default=None)
    
