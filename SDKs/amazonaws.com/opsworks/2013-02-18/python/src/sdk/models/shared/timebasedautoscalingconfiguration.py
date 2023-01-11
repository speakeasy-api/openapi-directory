import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weeklyautoscalingschedule as shared_weeklyautoscalingschedule


@dataclass_json
@dataclasses.dataclass
class TimeBasedAutoScalingConfiguration:
    r"""TimeBasedAutoScalingConfiguration
    Describes an instance's time-based auto scaling configuration.
    """
    
    auto_scaling_schedule: Optional[shared_weeklyautoscalingschedule.WeeklyAutoScalingSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingSchedule') }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    
