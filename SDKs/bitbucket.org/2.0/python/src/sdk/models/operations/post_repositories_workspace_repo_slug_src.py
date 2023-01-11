import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugSrcPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugSrcQueryParams:
    author: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    branch: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'branch', 'style': 'form', 'explode': True }})
    files: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'files', 'style': 'form', 'explode': True }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    parents: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parents', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugSrcSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugSrcRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugSrcPathParams = dataclasses.field()
    query_params: PostRepositoriesWorkspaceRepoSlugSrcQueryParams = dataclasses.field()
    security: PostRepositoriesWorkspaceRepoSlugSrcSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugSrcResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
