import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBalancePlatformsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBalancePlatformsIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetBalancePlatformsIDRequest:
    path_params: GetBalancePlatformsIDPathParams = dataclasses.field()
    security: GetBalancePlatformsIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBalancePlatformsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    balance_platform: Optional[Any] = dataclasses.field(default=None)
    rest_service_error: Optional[Any] = dataclasses.field(default=None)
    
