import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timebasedautoscalingconfiguration as shared_timebasedautoscalingconfiguration


@dataclass_json
@dataclasses.dataclass
class DescribeTimeBasedAutoScalingResult:
    r"""DescribeTimeBasedAutoScalingResult
    Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.
    """
    
    time_based_auto_scaling_configurations: Optional[list[shared_timebasedautoscalingconfiguration.TimeBasedAutoScalingConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeBasedAutoScalingConfigurations') }})
    
