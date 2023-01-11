import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergePathParams:
    pull_request_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_request_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeQueryParams:
    async_: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'async', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergePathParams = dataclasses.field()
    query_params: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeQueryParams = dataclasses.field()
    security: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurity = dataclasses.field()
    request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pullrequest: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
