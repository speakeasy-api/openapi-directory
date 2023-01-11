import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_changeset as shared_paginated_changeset


@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugCommitsPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugCommitsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugCommitsRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugCommitsPathParams = dataclasses.field()
    security: PostRepositoriesWorkspaceRepoSlugCommitsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostRepositoriesWorkspaceRepoSlugCommitsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_changeset: Optional[shared_paginated_changeset.PaginatedChangeset] = dataclasses.field(default=None)
    
