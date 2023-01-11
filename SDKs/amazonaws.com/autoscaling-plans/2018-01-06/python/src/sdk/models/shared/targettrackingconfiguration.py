import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customizedscalingmetricspecification as shared_customizedscalingmetricspecification
from ..shared import predefinedscalingmetricspecification as shared_predefinedscalingmetricspecification


@dataclass_json
@dataclasses.dataclass
class TargetTrackingConfiguration:
    r"""TargetTrackingConfiguration
    Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.
    """
    
    target_value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetValue') }})
    customized_scaling_metric_specification: Optional[shared_customizedscalingmetricspecification.CustomizedScalingMetricSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomizedScalingMetricSpecification') }})
    disable_scale_in: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableScaleIn') }})
    estimated_instance_warmup: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedInstanceWarmup') }})
    predefined_scaling_metric_specification: Optional[shared_predefinedscalingmetricspecification.PredefinedScalingMetricSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedScalingMetricSpecification') }})
    scale_in_cooldown: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleInCooldown') }})
    scale_out_cooldown: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleOutCooldown') }})
    
