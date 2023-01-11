import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceblockdevicemapping as shared_instanceblockdevicemapping


@dataclass_json
@dataclasses.dataclass
class InstanceConfiguration:
    r"""InstanceConfiguration
    Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
    """
    
    block_device_mappings: Optional[list[shared_instanceblockdevicemapping.InstanceBlockDeviceMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockDeviceMappings') }})
    image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
