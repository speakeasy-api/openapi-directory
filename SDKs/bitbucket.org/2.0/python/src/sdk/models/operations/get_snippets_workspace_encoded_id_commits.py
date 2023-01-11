import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_snippet_commit as shared_paginated_snippet_commit


@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDCommitsPathParams:
    encoded_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDCommitsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDCommitsRequest:
    path_params: GetSnippetsWorkspaceEncodedIDCommitsPathParams = dataclasses.field()
    security: GetSnippetsWorkspaceEncodedIDCommitsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDCommitsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_snippet_commit: Optional[shared_paginated_snippet_commit.PaginatedSnippetCommit] = dataclasses.field(default=None)
    
