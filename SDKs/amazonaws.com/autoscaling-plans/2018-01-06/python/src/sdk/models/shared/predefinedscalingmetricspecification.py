import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalingmetrictype_enum as shared_scalingmetrictype_enum


@dataclass_json
@dataclasses.dataclass
class PredefinedScalingMetricSpecification:
    r"""PredefinedScalingMetricSpecification
    Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.
    """
    
    predefined_scaling_metric_type: shared_scalingmetrictype_enum.ScalingMetricTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedScalingMetricType') }})
    resource_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLabel') }})
    
