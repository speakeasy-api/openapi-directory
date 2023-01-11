import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeletePolicyRequest:
    policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    delete_all_policy_resources: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteAllPolicyResources') }})
    
