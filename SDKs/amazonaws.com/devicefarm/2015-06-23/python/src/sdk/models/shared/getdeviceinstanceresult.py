import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceinstance as shared_deviceinstance


@dataclass_json
@dataclasses.dataclass
class GetDeviceInstanceResult:
    device_instance: Optional[shared_deviceinstance.DeviceInstance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceInstance') }})
    
