import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import principaltype_enum as shared_principaltype_enum
from ..shared import targettype_enum as shared_targettype_enum


@dataclass_json
@dataclasses.dataclass
class CreateAccountAssignmentRequest:
    instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    permission_set_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    principal_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalId') }})
    principal_type: shared_principaltype_enum.PrincipalTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalType') }})
    target_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetId') }})
    target_type: shared_targettype_enum.TargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    
