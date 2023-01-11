import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permissiontype_enum as shared_permissiontype_enum


@dataclass_json
@dataclasses.dataclass
class ShareInvitationSummary:
    r"""ShareInvitationSummary
    A share invitation summary return object.
    """
    
    permission_type: Optional[shared_permissiontype_enum.PermissionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionType') }})
    share_invitation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareInvitationId') }})
    shared_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedBy') }})
    shared_with: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedWith') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    workload_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadName') }})
    
