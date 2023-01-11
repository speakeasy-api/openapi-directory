import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permission_enum as shared_permission_enum


@dataclass_json
@dataclasses.dataclass
class ResourceDownloadOwnerSetting:
    r"""ResourceDownloadOwnerSetting
    The owner setting for downloaded machine learning resources.
    """
    
    group_owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupOwner') }})
    group_permission: shared_permission_enum.PermissionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupPermission') }})
    
