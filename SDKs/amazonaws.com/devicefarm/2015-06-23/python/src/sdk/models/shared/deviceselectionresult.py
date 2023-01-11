import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicefilter as shared_devicefilter


@dataclass_json
@dataclasses.dataclass
class DeviceSelectionResult:
    r"""DeviceSelectionResult
    Contains the run results requested by the device selection configuration and how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.
    """
    
    filters: Optional[list[shared_devicefilter.DeviceFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    matched_devices_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedDevicesCount') }})
    max_devices: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDevices') }})
    
