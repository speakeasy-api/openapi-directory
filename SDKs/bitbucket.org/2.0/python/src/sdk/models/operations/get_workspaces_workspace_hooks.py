import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_webhook_subscriptions as shared_paginated_webhook_subscriptions


@dataclasses.dataclass
class GetWorkspacesWorkspaceHooksPathParams:
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspacesWorkspaceHooksSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetWorkspacesWorkspaceHooksRequest:
    path_params: GetWorkspacesWorkspaceHooksPathParams = dataclasses.field()
    security: GetWorkspacesWorkspaceHooksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspacesWorkspaceHooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_webhook_subscriptions: Optional[shared_paginated_webhook_subscriptions.PaginatedWebhookSubscriptions] = dataclasses.field(default=None)
    
