import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import device as shared_device


@dataclass_json
@dataclasses.dataclass
class GetDeviceResult:
    r"""GetDeviceResult
    Represents the result of a get device request.
    """
    
    device: Optional[shared_device.Device] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    
