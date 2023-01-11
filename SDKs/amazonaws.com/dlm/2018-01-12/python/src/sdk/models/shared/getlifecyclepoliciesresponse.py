import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecyclepolicysummary as shared_lifecyclepolicysummary


@dataclass_json
@dataclasses.dataclass
class GetLifecyclePoliciesResponse:
    policies: Optional[list[shared_lifecyclepolicysummary.LifecyclePolicySummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    
