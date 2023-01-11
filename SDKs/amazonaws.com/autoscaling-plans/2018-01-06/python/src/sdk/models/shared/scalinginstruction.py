import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customizedloadmetricspecification as shared_customizedloadmetricspecification
from ..shared import predefinedloadmetricspecification as shared_predefinedloadmetricspecification
from ..shared import predictivescalingmaxcapacitybehavior_enum as shared_predictivescalingmaxcapacitybehavior_enum
from ..shared import predictivescalingmode_enum as shared_predictivescalingmode_enum
from ..shared import scalabledimension_enum as shared_scalabledimension_enum
from ..shared import scalingpolicyupdatebehavior_enum as shared_scalingpolicyupdatebehavior_enum
from ..shared import servicenamespace_enum as shared_servicenamespace_enum
from ..shared import targettrackingconfiguration as shared_targettrackingconfiguration


@dataclass_json
@dataclasses.dataclass
class ScalingInstruction:
    r"""ScalingInstruction
    <p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html\">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important>
    """
    
    max_capacity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    min_capacity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinCapacity') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: shared_scalabledimension_enum.ScalableDimensionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    service_namespace: shared_servicenamespace_enum.ServiceNamespaceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    target_tracking_configurations: list[shared_targettrackingconfiguration.TargetTrackingConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingConfigurations') }})
    customized_load_metric_specification: Optional[shared_customizedloadmetricspecification.CustomizedLoadMetricSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomizedLoadMetricSpecification') }})
    disable_dynamic_scaling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableDynamicScaling') }})
    predefined_load_metric_specification: Optional[shared_predefinedloadmetricspecification.PredefinedLoadMetricSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedLoadMetricSpecification') }})
    predictive_scaling_max_capacity_behavior: Optional[shared_predictivescalingmaxcapacitybehavior_enum.PredictiveScalingMaxCapacityBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictiveScalingMaxCapacityBehavior') }})
    predictive_scaling_max_capacity_buffer: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictiveScalingMaxCapacityBuffer') }})
    predictive_scaling_mode: Optional[shared_predictivescalingmode_enum.PredictiveScalingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictiveScalingMode') }})
    scaling_policy_update_behavior: Optional[shared_scalingpolicyupdatebehavior_enum.ScalingPolicyUpdateBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPolicyUpdateBehavior') }})
    scheduled_action_buffer_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledActionBufferTime') }})
    
