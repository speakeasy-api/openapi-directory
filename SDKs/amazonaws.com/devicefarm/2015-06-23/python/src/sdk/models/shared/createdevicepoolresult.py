import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicepool as shared_devicepool


@dataclass_json
@dataclasses.dataclass
class CreateDevicePoolResult:
    r"""CreateDevicePoolResult
    Represents the result of a create device pool request.
    """
    
    device_pool: Optional[shared_devicepool.DevicePool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePool') }})
    
