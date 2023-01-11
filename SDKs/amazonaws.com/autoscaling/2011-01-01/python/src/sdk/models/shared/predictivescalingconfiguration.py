import dataclasses
from typing import Optional
from enum import Enum
from ..shared import predictivescalingmaxcapacitybreachbehavior_enum as shared_predictivescalingmaxcapacitybreachbehavior_enum
from ..shared import predictivescalingmetricspecification as shared_predictivescalingmetricspecification
from ..shared import predictivescalingmode_enum as shared_predictivescalingmode_enum


@dataclasses.dataclass
class PredictiveScalingConfiguration:
    r"""PredictiveScalingConfiguration
    Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.
    """
    
    metric_specifications: list[shared_predictivescalingmetricspecification.PredictiveScalingMetricSpecification] = dataclasses.field()
    max_capacity_breach_behavior: Optional[shared_predictivescalingmaxcapacitybreachbehavior_enum.PredictiveScalingMaxCapacityBreachBehaviorEnum] = dataclasses.field(default=None)
    max_capacity_buffer: Optional[int] = dataclasses.field(default=None)
    mode: Optional[shared_predictivescalingmode_enum.PredictiveScalingModeEnum] = dataclasses.field(default=None)
    scheduling_buffer_time: Optional[int] = dataclasses.field(default=None)
    
