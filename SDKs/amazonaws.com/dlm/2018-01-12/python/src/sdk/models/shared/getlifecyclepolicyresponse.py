import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecyclepolicy as shared_lifecyclepolicy


@dataclass_json
@dataclasses.dataclass
class GetLifecyclePolicyResponse:
    policy: Optional[shared_lifecyclepolicy.LifecyclePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    
