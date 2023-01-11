import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetUsersSelectedUserHooksUIDPathParams:
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersSelectedUserHooksUIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUsersSelectedUserHooksUIDRequest:
    path_params: GetUsersSelectedUserHooksUIDPathParams = dataclasses.field()
    security: GetUsersSelectedUserHooksUIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersSelectedUserHooksUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    webhook_subscription: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
