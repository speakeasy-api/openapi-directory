import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policytypevalues_enum as shared_policytypevalues_enum
from ..shared import gettablepolicystatevalues_enum as shared_gettablepolicystatevalues_enum


@dataclass_json
@dataclasses.dataclass
class LifecyclePolicySummary:
    r"""LifecyclePolicySummary
    Summary information about a lifecycle policy.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    policy_type: Optional[shared_policytypevalues_enum.PolicyTypeValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    state: Optional[shared_gettablepolicystatevalues_enum.GettablePolicyStateValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
