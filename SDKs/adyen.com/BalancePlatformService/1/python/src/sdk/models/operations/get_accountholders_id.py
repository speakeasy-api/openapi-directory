import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAccountHoldersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountHoldersIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAccountHoldersIDRequest:
    path_params: GetAccountHoldersIDPathParams = dataclasses.field()
    security: GetAccountHoldersIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountHoldersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_holder: Optional[Any] = dataclasses.field(default=None)
    rest_service_error: Optional[Any] = dataclasses.field(default=None)
    
