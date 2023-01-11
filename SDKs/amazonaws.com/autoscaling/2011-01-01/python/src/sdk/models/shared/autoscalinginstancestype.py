import dataclasses
from typing import Optional
from ..shared import autoscalinginstancedetails as shared_autoscalinginstancedetails


@dataclasses.dataclass
class AutoScalingInstancesType:
    auto_scaling_instances: Optional[list[shared_autoscalinginstancedetails.AutoScalingInstanceDetails]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
