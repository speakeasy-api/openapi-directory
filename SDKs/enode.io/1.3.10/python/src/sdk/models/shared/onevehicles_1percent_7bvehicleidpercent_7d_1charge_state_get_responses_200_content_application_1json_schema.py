import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum(str, Enum):
    UNKNOWN = ""
    DEFAULT = "DEFAULT"


@dataclass_json
@dataclasses.dataclass
class Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema:
    battery_capacity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryCapacity') }})
    battery_level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryLevel') }})
    charge_limit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeLimit') }})
    charge_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeRate') }})
    charge_time_remaining: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeTimeRemaining') }})
    is_charging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCharging') }})
    is_charging_reasons: Optional[list[Onevehicles1Percent7BvehicleIDPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isChargingReasons') }})
    is_plugged_in: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPluggedIn') }})
    range: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
