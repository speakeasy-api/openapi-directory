import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchemaPropertiesEnum(str, Enum):
    BATTERY_LEVEL = "BATTERY_LEVEL"
    RANGE = "RANGE"
    IS_PLUGGED_IN = "IS_PLUGGED_IN"
    IS_CHARGING = "IS_CHARGING"
    IS_CHARGING_REASONS = "IS_CHARGING_REASONS"
    LOCATION = "LOCATION"


@dataclass_json
@dataclasses.dataclass
class Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchema:
    properties: Optional[Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchemaPropertiesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
