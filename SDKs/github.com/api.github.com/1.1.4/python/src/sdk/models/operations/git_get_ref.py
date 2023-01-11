import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import git_ref as shared_git_ref


@dataclasses.dataclass
class GitGetRefPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GitGetRefRequest:
    path_params: GitGetRefPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GitGetRefResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    git_ref: Optional[shared_git_ref.GitRef] = dataclasses.field(default=None)
    
