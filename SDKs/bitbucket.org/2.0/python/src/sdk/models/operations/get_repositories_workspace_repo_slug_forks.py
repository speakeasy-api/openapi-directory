import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_repositories as shared_paginated_repositories


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugForksPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugForksRoleEnum(str, Enum):
    ADMIN = "admin"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"
    OWNER = "owner"


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugForksQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[GetRepositoriesWorkspaceRepoSlugForksRoleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugForksSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugForksRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugForksPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugForksQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugForksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugForksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_repositories: Optional[shared_paginated_repositories.PaginatedRepositories] = dataclasses.field(default=None)
    
