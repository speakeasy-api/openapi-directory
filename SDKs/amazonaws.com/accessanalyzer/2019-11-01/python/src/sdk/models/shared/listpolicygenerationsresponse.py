import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policygeneration as shared_policygeneration


@dataclass_json
@dataclasses.dataclass
class ListPolicyGenerationsResponse:
    policy_generations: list[shared_policygeneration.PolicyGeneration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyGenerations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
