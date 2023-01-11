import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weeklyautoscalingschedule as shared_weeklyautoscalingschedule


@dataclass_json
@dataclasses.dataclass
class SetTimeBasedAutoScalingRequest:
    instance_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    auto_scaling_schedule: Optional[shared_weeklyautoscalingschedule.WeeklyAutoScalingSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingSchedule') }})
    
