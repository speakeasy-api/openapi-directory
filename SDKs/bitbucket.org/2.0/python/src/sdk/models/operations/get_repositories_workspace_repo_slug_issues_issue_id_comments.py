import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_issue_comments as shared_paginated_issue_comments


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsPathParams:
    issue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_issue_comments: Optional[shared_paginated_issue_comments.PaginatedIssueComments] = dataclasses.field(default=None)
    
