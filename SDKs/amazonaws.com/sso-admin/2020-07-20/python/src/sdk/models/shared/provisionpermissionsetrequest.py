import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisiontargettype_enum as shared_provisiontargettype_enum


@dataclass_json
@dataclasses.dataclass
class ProvisionPermissionSetRequest:
    instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    permission_set_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    target_type: shared_provisiontargettype_enum.ProvisionTargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    target_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetId') }})
    
