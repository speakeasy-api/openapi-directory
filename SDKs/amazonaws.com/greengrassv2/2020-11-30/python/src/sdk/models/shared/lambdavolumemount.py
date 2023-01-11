import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdafilesystempermission_enum as shared_lambdafilesystempermission_enum


@dataclass_json
@dataclasses.dataclass
class LambdaVolumeMount:
    r"""LambdaVolumeMount
    Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.
    """
    
    destination_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationPath') }})
    source_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePath') }})
    add_group_owner: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addGroupOwner') }})
    permission: Optional[shared_lambdafilesystempermission_enum.LambdaFilesystemPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
