import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_branchrestrictions as shared_paginated_branchrestrictions


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams:
    kind: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'kind', 'style': 'form', 'explode': True }})
    pattern: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pattern', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_branchrestrictions: Optional[shared_paginated_branchrestrictions.PaginatedBranchrestrictions] = dataclasses.field(default=None)
    
