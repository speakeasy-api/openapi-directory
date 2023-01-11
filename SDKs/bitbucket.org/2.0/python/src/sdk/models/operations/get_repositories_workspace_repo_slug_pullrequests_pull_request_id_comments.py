import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_pullrequest_comments as shared_paginated_pullrequest_comments


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsPathParams:
    pull_request_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_request_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsPathParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_pullrequest_comments: Optional[shared_paginated_pullrequest_comments.PaginatedPullrequestComments] = dataclasses.field(default=None)
    
