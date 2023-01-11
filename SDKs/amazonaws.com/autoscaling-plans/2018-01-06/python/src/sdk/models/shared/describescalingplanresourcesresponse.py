import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalingplanresource as shared_scalingplanresource


@dataclass_json
@dataclasses.dataclass
class DescribeScalingPlanResourcesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scaling_plan_resources: Optional[list[shared_scalingplanresource.ScalingPlanResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanResources') }})
    
