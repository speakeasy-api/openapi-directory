import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_treeentries as shared_paginated_treeentries


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugSrcFormatEnum(str, Enum):
    META = "meta"


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcQueryParams:
    format: Optional[GetRepositoriesWorkspaceRepoSlugSrcFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugSrcPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugSrcQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugSrcSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugSrcResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_treeentries: Optional[shared_paginated_treeentries.PaginatedTreeentries] = dataclasses.field(default=None)
    
