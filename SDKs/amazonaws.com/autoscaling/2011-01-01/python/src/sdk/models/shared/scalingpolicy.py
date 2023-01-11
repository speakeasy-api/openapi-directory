import dataclasses
from typing import Optional
from ..shared import alarm as shared_alarm
from ..shared import predictivescalingconfiguration as shared_predictivescalingconfiguration
from ..shared import stepadjustment as shared_stepadjustment
from ..shared import targettrackingconfiguration as shared_targettrackingconfiguration


@dataclasses.dataclass
class ScalingPolicy:
    r"""ScalingPolicy
    Describes a scaling policy.
    """
    
    adjustment_type: Optional[str] = dataclasses.field(default=None)
    alarms: Optional[list[shared_alarm.Alarm]] = dataclasses.field(default=None)
    auto_scaling_group_name: Optional[str] = dataclasses.field(default=None)
    cooldown: Optional[int] = dataclasses.field(default=None)
    enabled: Optional[bool] = dataclasses.field(default=None)
    estimated_instance_warmup: Optional[int] = dataclasses.field(default=None)
    metric_aggregation_type: Optional[str] = dataclasses.field(default=None)
    min_adjustment_magnitude: Optional[int] = dataclasses.field(default=None)
    min_adjustment_step: Optional[int] = dataclasses.field(default=None)
    policy_arn: Optional[str] = dataclasses.field(default=None)
    policy_name: Optional[str] = dataclasses.field(default=None)
    policy_type: Optional[str] = dataclasses.field(default=None)
    predictive_scaling_configuration: Optional[shared_predictivescalingconfiguration.PredictiveScalingConfiguration] = dataclasses.field(default=None)
    scaling_adjustment: Optional[int] = dataclasses.field(default=None)
    step_adjustments: Optional[list[shared_stepadjustment.StepAdjustment]] = dataclasses.field(default=None)
    target_tracking_configuration: Optional[shared_targettrackingconfiguration.TargetTrackingConfiguration] = dataclasses.field(default=None)
    
