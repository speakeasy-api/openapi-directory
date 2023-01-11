import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PostVehiclesVehicleidChargingPathParams:
    vehicle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vehicleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostVehiclesVehicleidChargingSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostVehiclesVehicleidChargingRequest:
    path_params: PostVehiclesVehicleidChargingPathParams = dataclasses.field()
    security: PostVehiclesVehicleidChargingSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostVehiclesVehicleidChargingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
