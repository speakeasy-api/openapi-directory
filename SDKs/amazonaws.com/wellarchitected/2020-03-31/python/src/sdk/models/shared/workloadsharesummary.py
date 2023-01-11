import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permissiontype_enum as shared_permissiontype_enum
from ..shared import sharestatus_enum as shared_sharestatus_enum


@dataclass_json
@dataclasses.dataclass
class WorkloadShareSummary:
    r"""WorkloadShareSummary
    A workload share summary return object.
    """
    
    permission_type: Optional[shared_permissiontype_enum.PermissionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionType') }})
    share_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareId') }})
    shared_with: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedWith') }})
    status: Optional[shared_sharestatus_enum.ShareStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
