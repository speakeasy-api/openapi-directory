import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_commit_comments as shared_paginated_commit_comments


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams:
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams = dataclasses.field()
    query_params: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_commit_comments: Optional[shared_paginated_commit_comments.PaginatedCommitComments] = dataclasses.field(default=None)
    
