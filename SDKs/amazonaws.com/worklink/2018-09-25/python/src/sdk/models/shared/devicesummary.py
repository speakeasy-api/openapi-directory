import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicestatus_enum as shared_devicestatus_enum


@dataclass_json
@dataclasses.dataclass
class DeviceSummary:
    r"""DeviceSummary
    The summary of devices.
    """
    
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    device_status: Optional[shared_devicestatus_enum.DeviceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceStatus') }})
    
