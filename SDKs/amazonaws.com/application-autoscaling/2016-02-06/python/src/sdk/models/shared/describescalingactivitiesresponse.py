import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalingactivity as shared_scalingactivity


@dataclass_json
@dataclasses.dataclass
class DescribeScalingActivitiesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scaling_activities: Optional[list[shared_scalingactivity.ScalingActivity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingActivities') }})
    
