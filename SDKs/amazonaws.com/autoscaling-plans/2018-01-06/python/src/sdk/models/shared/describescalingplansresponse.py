import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalingplan as shared_scalingplan


@dataclass_json
@dataclasses.dataclass
class DescribeScalingPlansResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scaling_plans: Optional[list[shared_scalingplan.ScalingPlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlans') }})
    
