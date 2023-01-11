import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdadevicemount as shared_lambdadevicemount
from ..shared import lambdavolumemount as shared_lambdavolumemount


@dataclass_json
@dataclasses.dataclass
class LambdaContainerParams:
    r"""LambdaContainerParams
    Contains information about a container in which Lambda functions run on Greengrass core devices.
    """
    
    devices: Optional[list[shared_lambdadevicemount.LambdaDeviceMount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    memory_size_in_kb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySizeInKB') }})
    mount_ro_sysfs: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountROSysfs') }})
    volumes: Optional[list[shared_lambdavolumemount.LambdaVolumeMount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
