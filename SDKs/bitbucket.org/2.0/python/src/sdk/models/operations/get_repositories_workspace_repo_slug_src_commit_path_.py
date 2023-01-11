import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_treeentries as shared_paginated_treeentries


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams:
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum(str, Enum):
    META = "meta"
    RENDERED = "rendered"


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams:
    format: Optional[GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    max_depth: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_depth', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_treeentries: Optional[shared_paginated_treeentries.PaginatedTreeentries] = dataclasses.field(default=None)
    
