import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_ssh_user_keys as shared_paginated_ssh_user_keys


@dataclasses.dataclass
class GetUsersSelectedUserSSHKeysPathParams:
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersSelectedUserSSHKeysSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUsersSelectedUserSSHKeysRequest:
    path_params: GetUsersSelectedUserSSHKeysPathParams = dataclasses.field()
    security: GetUsersSelectedUserSSHKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersSelectedUserSSHKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_ssh_user_keys: Optional[shared_paginated_ssh_user_keys.PaginatedSSHUserKeys] = dataclasses.field(default=None)
    
