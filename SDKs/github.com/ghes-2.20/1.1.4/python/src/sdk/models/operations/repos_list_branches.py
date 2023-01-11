import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import short_branch as shared_short_branch


@dataclasses.dataclass
class ReposListBranchesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListBranchesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    protected: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'protected', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListBranchesRequest:
    path_params: ReposListBranchesPathParams = dataclasses.field()
    query_params: ReposListBranchesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListBranchesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    short_branches: Optional[list[shared_short_branch.ShortBranch]] = dataclasses.field(default=None)
    
