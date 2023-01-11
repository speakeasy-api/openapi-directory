import dataclasses
from typing import Optional
from enum import Enum
from ..shared import repo_enum4 as shared_repo_enum4
from ..shared import repo_enum3 as shared_repo_enum3
from ..shared import repo_enum2 as shared_repo_enum2
from ..shared import basic_error as shared_basic_error
from ..shared import milestone as shared_milestone


@dataclasses.dataclass
class IssuesListMilestonesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IssuesListMilestonesQueryParams:
    direction: Optional[shared_repo_enum4.RepoEnum4] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_repo_enum3.RepoEnum3] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    state: Optional[shared_repo_enum2.RepoEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IssuesListMilestonesRequest:
    path_params: IssuesListMilestonesPathParams = dataclasses.field()
    query_params: IssuesListMilestonesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IssuesListMilestonesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    milestones: Optional[list[shared_milestone.Milestone]] = dataclasses.field(default=None)
    
