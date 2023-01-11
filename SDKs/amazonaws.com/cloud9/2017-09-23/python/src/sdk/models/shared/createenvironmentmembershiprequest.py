import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memberpermissions_enum as shared_memberpermissions_enum


@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentMembershipRequest:
    environment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentId') }})
    permissions: shared_memberpermissions_enum.MemberPermissionsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    user_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userArn') }})
    
