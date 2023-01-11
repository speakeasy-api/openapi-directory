import dataclasses
from typing import Optional
from enum import Enum
from ..shared import repo_enum as shared_repo_enum
from ..shared import basic_error as shared_basic_error
from ..shared import collaborator as shared_collaborator


@dataclasses.dataclass
class ReposListCollaboratorsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListCollaboratorsQueryParams:
    affiliation: Optional[shared_repo_enum.RepoEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListCollaboratorsRequest:
    path_params: ReposListCollaboratorsPathParams = dataclasses.field()
    query_params: ReposListCollaboratorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListCollaboratorsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    collaborators: Optional[list[shared_collaborator.Collaborator]] = dataclasses.field(default=None)
    
