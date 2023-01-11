import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policytype_enum as shared_policytype_enum
from ..shared import scalabledimension_enum as shared_scalabledimension_enum
from ..shared import servicenamespace_enum as shared_servicenamespace_enum
from ..shared import stepscalingpolicyconfiguration as shared_stepscalingpolicyconfiguration
from ..shared import targettrackingscalingpolicyconfiguration as shared_targettrackingscalingpolicyconfiguration


@dataclass_json
@dataclasses.dataclass
class PutScalingPolicyRequest:
    policy_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: shared_scalabledimension_enum.ScalableDimensionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    service_namespace: shared_servicenamespace_enum.ServiceNamespaceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    policy_type: Optional[shared_policytype_enum.PolicyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    step_scaling_policy_configuration: Optional[shared_stepscalingpolicyconfiguration.StepScalingPolicyConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepScalingPolicyConfiguration') }})
    target_tracking_scaling_policy_configuration: Optional[shared_targettrackingscalingpolicyconfiguration.TargetTrackingScalingPolicyConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingScalingPolicyConfiguration') }})
    
