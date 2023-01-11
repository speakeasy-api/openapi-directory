import dataclasses
from typing import Optional
from enum import Enum
from ..shared import repo_enum2 as shared_repo_enum2
from ..shared import basic_error as shared_basic_error
from ..shared import project as shared_project
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class ProjectsListForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsListForRepoQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[shared_repo_enum2.RepoEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProjectsListForRepoRequest:
    path_params: ProjectsListForRepoPathParams = dataclasses.field()
    query_params: ProjectsListForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsListForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    projects: Optional[list[shared_project.Project]] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
