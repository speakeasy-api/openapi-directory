import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policytopath as shared_policytopath


@dataclass_json
@dataclasses.dataclass
class LookupPolicyResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    policy_to_path_list: Optional[list[shared_policytopath.PolicyToPath]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyToPathList') }})
    
