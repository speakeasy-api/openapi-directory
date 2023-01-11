import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VolumeConfiguration:
    r"""VolumeConfiguration
    Describes an Amazon EBS volume configuration.
    """
    
    mount_point: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountPoint') }})
    number_of_disks: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfDisks') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    encrypted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    iops: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iops') }})
    raid_level: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RaidLevel') }})
    volume_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeType') }})
    
