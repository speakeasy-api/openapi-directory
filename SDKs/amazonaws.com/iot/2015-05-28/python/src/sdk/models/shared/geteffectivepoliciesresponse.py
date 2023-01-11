import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import effectivepolicy as shared_effectivepolicy


@dataclass_json
@dataclasses.dataclass
class GetEffectivePoliciesResponse:
    effective_policies: Optional[list[shared_effectivepolicy.EffectivePolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectivePolicies') }})
    
