import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import coredevice as shared_coredevice


@dataclass_json
@dataclasses.dataclass
class ListCoreDevicesResponse:
    core_devices: Optional[list[shared_coredevice.CoreDevice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coreDevices') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
