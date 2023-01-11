import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyparameter as shared_policyparameter


@dataclass_json
@dataclasses.dataclass
class ReviewPolicy:
    r"""ReviewPolicy
     HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
    """
    
    policy_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    parameters: Optional[list[shared_policyparameter.PolicyParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
