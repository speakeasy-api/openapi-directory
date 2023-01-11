import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_files as shared_paginated_files


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams:
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    renames: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'renames', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_files: Optional[shared_paginated_files.PaginatedFiles] = dataclasses.field(default=None)
    
