import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customizedmetricspecification as shared_customizedmetricspecification
from ..shared import predefinedmetricspecification as shared_predefinedmetricspecification


@dataclass_json
@dataclasses.dataclass
class TargetTrackingScalingPolicyConfiguration:
    r"""TargetTrackingScalingPolicyConfiguration
    Represents a target tracking scaling policy configuration to use with Application Auto Scaling.
    """
    
    target_value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetValue') }})
    customized_metric_specification: Optional[shared_customizedmetricspecification.CustomizedMetricSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomizedMetricSpecification') }})
    disable_scale_in: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableScaleIn') }})
    predefined_metric_specification: Optional[shared_predefinedmetricspecification.PredefinedMetricSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedMetricSpecification') }})
    scale_in_cooldown: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleInCooldown') }})
    scale_out_cooldown: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleOutCooldown') }})
    
