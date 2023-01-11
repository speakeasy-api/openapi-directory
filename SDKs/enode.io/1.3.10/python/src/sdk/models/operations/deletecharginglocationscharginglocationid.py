import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteCharginglocationsCharginglocationidPathParams:
    charging_location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chargingLocationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCharginglocationsCharginglocationidSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteCharginglocationsCharginglocationidRequest:
    path_params: DeleteCharginglocationsCharginglocationidPathParams = dataclasses.field()
    security: DeleteCharginglocationsCharginglocationidSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCharginglocationsCharginglocationidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
