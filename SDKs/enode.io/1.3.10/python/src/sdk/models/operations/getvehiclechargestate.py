import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetVehicleChargestatePathParams:
    vehicle_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vehicleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehicleChargestateSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetVehicleChargestate200ApplicationJSONIsChargingReasonsEnum(str, Enum):
    UNKNOWN = ""
    DEFAULT = "DEFAULT"


@dataclass_json
@dataclasses.dataclass
class GetVehicleChargestate200ApplicationJSON:
    battery_capacity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryCapacity') }})
    battery_level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryLevel') }})
    charge_limit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeLimit') }})
    charge_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeRate') }})
    charge_time_remaining: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeTimeRemaining') }})
    is_charging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCharging') }})
    is_charging_reasons: Optional[list[GetVehicleChargestate200ApplicationJSONIsChargingReasonsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isChargingReasons') }})
    is_plugged_in: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPluggedIn') }})
    range: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    

@dataclasses.dataclass
class GetVehicleChargestateRequest:
    path_params: GetVehicleChargestatePathParams = dataclasses.field()
    security: GetVehicleChargestateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVehicleChargestateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_vehicle_chargestate_200_application_json_object: Optional[GetVehicleChargestate200ApplicationJSON] = dataclasses.field(default=None)
    
