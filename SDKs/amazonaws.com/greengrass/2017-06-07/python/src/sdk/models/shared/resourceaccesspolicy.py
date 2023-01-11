import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permission_enum as shared_permission_enum


@dataclass_json
@dataclasses.dataclass
class ResourceAccessPolicy:
    r"""ResourceAccessPolicy
    A policy used by the function to access a resource.
    """
    
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    permission: Optional[shared_permission_enum.PermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    
