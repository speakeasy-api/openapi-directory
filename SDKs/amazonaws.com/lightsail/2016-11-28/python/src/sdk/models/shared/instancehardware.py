import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import disk as shared_disk


@dataclass_json
@dataclasses.dataclass
class InstanceHardware:
    r"""InstanceHardware
    Describes the hardware for the instance.
    """
    
    cpu_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCount') }})
    disks: Optional[list[shared_disk.Disk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    ram_size_in_gb: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramSizeInGb') }})
    
