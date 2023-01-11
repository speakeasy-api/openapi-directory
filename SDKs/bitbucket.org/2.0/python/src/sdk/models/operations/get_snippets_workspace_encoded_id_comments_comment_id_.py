import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    encoded_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDRequest:
    path_params: GetSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams = dataclasses.field()
    security: GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    snippet_comment: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
