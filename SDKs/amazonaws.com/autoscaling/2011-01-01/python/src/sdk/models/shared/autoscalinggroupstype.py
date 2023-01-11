import dataclasses
from typing import Optional
from ..shared import autoscalinggroup as shared_autoscalinggroup


@dataclasses.dataclass
class AutoScalingGroupsType:
    auto_scaling_groups: list[shared_autoscalinggroup.AutoScalingGroup] = dataclasses.field()
    next_token: Optional[str] = dataclasses.field(default=None)
    
