import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalingpolicy as shared_scalingpolicy


@dataclass_json
@dataclasses.dataclass
class DescribeScalingPoliciesOutput:
    r"""DescribeScalingPoliciesOutput
    Represents the returned data in response to a request operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scaling_policies: Optional[list[shared_scalingpolicy.ScalingPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPolicies') }})
    
