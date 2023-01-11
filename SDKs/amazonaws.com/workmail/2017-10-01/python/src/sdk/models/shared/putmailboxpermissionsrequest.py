import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permissiontype_enum as shared_permissiontype_enum


@dataclass_json
@dataclasses.dataclass
class PutMailboxPermissionsRequest:
    entity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityId') }})
    grantee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteeId') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    permission_values: list[shared_permissiontype_enum.PermissionTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionValues') }})
    
