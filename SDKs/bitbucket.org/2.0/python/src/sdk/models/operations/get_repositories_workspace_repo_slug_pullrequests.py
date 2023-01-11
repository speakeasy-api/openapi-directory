import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_pullrequests as shared_paginated_pullrequests


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum(str, Enum):
    MERGED = "MERGED"
    SUPERSEDED = "SUPERSEDED"
    OPEN = "OPEN"
    DECLINED = "DECLINED"


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams:
    state: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_pullrequests: Optional[shared_paginated_pullrequests.PaginatedPullrequests] = dataclasses.field(default=None)
    
