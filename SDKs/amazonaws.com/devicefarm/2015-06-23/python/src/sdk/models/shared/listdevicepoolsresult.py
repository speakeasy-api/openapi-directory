import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicepool as shared_devicepool


@dataclass_json
@dataclasses.dataclass
class ListDevicePoolsResult:
    r"""ListDevicePoolsResult
    Represents the result of a list device pools request.
    """
    
    device_pools: Optional[list[shared_devicepool.DevicePool]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePools') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
