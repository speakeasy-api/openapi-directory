import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdafilesystempermission_enum as shared_lambdafilesystempermission_enum


@dataclass_json
@dataclasses.dataclass
class LambdaDeviceMount:
    r"""LambdaDeviceMount
    Contains information about a device that Linux processes in a container can access.
    """
    
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    add_group_owner: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addGroupOwner') }})
    permission: Optional[shared_lambdafilesystempermission_enum.LambdaFilesystemPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
