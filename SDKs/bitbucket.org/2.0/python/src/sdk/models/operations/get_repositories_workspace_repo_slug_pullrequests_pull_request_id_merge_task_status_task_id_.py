import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDPathParams:
    pull_request_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_request_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDPathParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
