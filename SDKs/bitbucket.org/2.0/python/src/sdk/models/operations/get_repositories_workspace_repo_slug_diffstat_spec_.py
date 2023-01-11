import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_diffstats as shared_paginated_diffstats


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    spec: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams:
    ignore_whitespace: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ignore_whitespace', 'style': 'form', 'explode': True }})
    merge: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'merge', 'style': 'form', 'explode': True }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    renames: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'renames', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_diffstats: Optional[shared_paginated_diffstats.PaginatedDiffstats] = dataclasses.field(default=None)
    
