import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import device as shared_device
from ..shared import tmpfs as shared_tmpfs


@dataclass_json
@dataclasses.dataclass
class LinuxParameters:
    r"""LinuxParameters
    Linux-specific modifications that are applied to the container, such as details for device mappings.
    """
    
    devices: Optional[list[shared_device.Device]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    init_process_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initProcessEnabled') }})
    max_swap: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSwap') }})
    shared_memory_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedMemorySize') }})
    swappiness: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('swappiness') }})
    tmpfs: Optional[list[shared_tmpfs.Tmpfs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tmpfs') }})
    
