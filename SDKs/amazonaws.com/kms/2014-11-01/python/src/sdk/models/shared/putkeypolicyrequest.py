import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutKeyPolicyRequest:
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    policy_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    bypass_policy_lockout_safety_check: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BypassPolicyLockoutSafetyCheck') }})
    
