import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    spec: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams:
    binary: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'binary', 'style': 'form', 'explode': True }})
    context: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'context', 'style': 'form', 'explode': True }})
    ignore_whitespace: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ignore_whitespace', 'style': 'form', 'explode': True }})
    merge: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'merge', 'style': 'form', 'explode': True }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    renames: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'renames', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
