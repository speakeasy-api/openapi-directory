import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicecgrouppermission_enum as shared_devicecgrouppermission_enum


@dataclass_json
@dataclasses.dataclass
class Device:
    r"""Device
    <p>An object representing a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note>
    """
    
    host_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostPath') }})
    container_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPath') }})
    permissions: Optional[list[shared_devicecgrouppermission_enum.DeviceCgroupPermissionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
