import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarm as shared_alarm
from ..shared import policytype_enum as shared_policytype_enum
from ..shared import scalabledimension_enum as shared_scalabledimension_enum
from ..shared import servicenamespace_enum as shared_servicenamespace_enum
from ..shared import stepscalingpolicyconfiguration as shared_stepscalingpolicyconfiguration
from ..shared import targettrackingscalingpolicyconfiguration as shared_targettrackingscalingpolicyconfiguration


@dataclass_json
@dataclasses.dataclass
class ScalingPolicy:
    r"""ScalingPolicy
    <p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html\">Getting started with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
    """
    
    creation_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    policy_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyARN') }})
    policy_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    policy_type: shared_policytype_enum.PolicyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: shared_scalabledimension_enum.ScalableDimensionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    service_namespace: shared_servicenamespace_enum.ServiceNamespaceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    alarms: Optional[list[shared_alarm.Alarm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alarms') }})
    step_scaling_policy_configuration: Optional[shared_stepscalingpolicyconfiguration.StepScalingPolicyConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepScalingPolicyConfiguration') }})
    target_tracking_scaling_policy_configuration: Optional[shared_targettrackingscalingpolicyconfiguration.TargetTrackingScalingPolicyConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingScalingPolicyConfiguration') }})
    
