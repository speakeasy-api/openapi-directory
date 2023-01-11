import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ebsinstanceblockdevice as shared_ebsinstanceblockdevice


@dataclass_json
@dataclasses.dataclass
class InstanceBlockDeviceMapping:
    r"""InstanceBlockDeviceMapping
    The description of a block device mapping.
    """
    
    device_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    ebs: Optional[shared_ebsinstanceblockdevice.EbsInstanceBlockDevice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebs') }})
    
