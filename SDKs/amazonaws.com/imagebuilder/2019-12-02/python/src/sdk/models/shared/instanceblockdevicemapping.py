import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ebsinstanceblockdevicespecification as shared_ebsinstanceblockdevicespecification


@dataclass_json
@dataclasses.dataclass
class InstanceBlockDeviceMapping:
    r"""InstanceBlockDeviceMapping
    Defines block device mappings for the instance used to configure your image.
    """
    
    device_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    ebs: Optional[shared_ebsinstanceblockdevicespecification.EbsInstanceBlockDeviceSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebs') }})
    no_device: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noDevice') }})
    virtual_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualName') }})
    
