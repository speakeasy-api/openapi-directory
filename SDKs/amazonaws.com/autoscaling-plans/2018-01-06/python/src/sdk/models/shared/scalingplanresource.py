import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalabledimension_enum as shared_scalabledimension_enum
from ..shared import scalingpolicy as shared_scalingpolicy
from ..shared import scalingstatuscode_enum as shared_scalingstatuscode_enum
from ..shared import servicenamespace_enum as shared_servicenamespace_enum


@dataclass_json
@dataclasses.dataclass
class ScalingPlanResource:
    r"""ScalingPlanResource
    Represents a scalable resource.
    """
    
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: shared_scalabledimension_enum.ScalableDimensionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    scaling_plan_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanName') }})
    scaling_plan_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanVersion') }})
    scaling_status_code: shared_scalingstatuscode_enum.ScalingStatusCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingStatusCode') }})
    service_namespace: shared_servicenamespace_enum.ServiceNamespaceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    scaling_policies: Optional[list[shared_scalingpolicy.ScalingPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPolicies') }})
    scaling_status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingStatusMessage') }})
    
