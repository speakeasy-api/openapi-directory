import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_webhook_subscriptions as shared_paginated_webhook_subscriptions


@dataclasses.dataclass
class GetUsersSelectedUserHooksPathParams:
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersSelectedUserHooksSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUsersSelectedUserHooksRequest:
    path_params: GetUsersSelectedUserHooksPathParams = dataclasses.field()
    security: GetUsersSelectedUserHooksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersSelectedUserHooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_webhook_subscriptions: Optional[shared_paginated_webhook_subscriptions.PaginatedWebhookSubscriptions] = dataclasses.field(default=None)
    
