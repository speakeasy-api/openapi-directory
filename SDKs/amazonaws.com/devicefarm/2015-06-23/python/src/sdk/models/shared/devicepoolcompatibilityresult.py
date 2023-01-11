import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import device as shared_device
from ..shared import incompatibilitymessage as shared_incompatibilitymessage


@dataclass_json
@dataclasses.dataclass
class DevicePoolCompatibilityResult:
    r"""DevicePoolCompatibilityResult
    Represents a device pool compatibility result.
    """
    
    compatible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatible') }})
    device: Optional[shared_device.Device] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    incompatibility_messages: Optional[list[shared_incompatibilitymessage.IncompatibilityMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incompatibilityMessages') }})
    
