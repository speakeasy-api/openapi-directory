import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicefilter as shared_devicefilter


@dataclass_json
@dataclasses.dataclass
class DeviceSelectionConfiguration:
    r"""DeviceSelectionConfiguration
    Represents the device filters used in a test run and the maximum number of devices to be included in the run. It is passed in as the <code>deviceSelectionConfiguration</code> request parameter in <a>ScheduleRun</a>.
    """
    
    filters: list[shared_devicefilter.DeviceFilter] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_devices: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDevices') }})
    
