import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicestatus_enum as shared_devicestatus_enum
from ..shared import devicetype_enum as shared_devicetype_enum


@dataclass_json
@dataclasses.dataclass
class GetDeviceResponse:
    device_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceArn') }})
    device_capabilities: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCapabilities') }})
    device_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    device_status: shared_devicestatus_enum.DeviceStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceStatus') }})
    device_type: shared_devicetype_enum.DeviceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    provider_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    
