import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membertype_enum as shared_membertype_enum
from ..shared import permissiontype_enum as shared_permissiontype_enum


@dataclass_json
@dataclasses.dataclass
class Permission:
    r"""Permission
    Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.
    """
    
    grantee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteeId') }})
    grantee_type: shared_membertype_enum.MemberTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteeType') }})
    permission_values: list[shared_permissiontype_enum.PermissionTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionValues') }})
    
