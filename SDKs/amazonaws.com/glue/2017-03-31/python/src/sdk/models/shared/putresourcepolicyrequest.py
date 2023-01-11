import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import enablehybridvalues_enum as shared_enablehybridvalues_enum
from ..shared import existcondition_enum as shared_existcondition_enum


@dataclass_json
@dataclasses.dataclass
class PutResourcePolicyRequest:
    policy_in_json: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyInJson') }})
    enable_hybrid: Optional[shared_enablehybridvalues_enum.EnableHybridValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableHybrid') }})
    policy_exists_condition: Optional[shared_existcondition_enum.ExistConditionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyExistsCondition') }})
    policy_hash_condition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyHashCondition') }})
    resource_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    
