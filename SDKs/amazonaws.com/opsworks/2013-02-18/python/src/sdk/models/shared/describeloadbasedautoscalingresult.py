import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loadbasedautoscalingconfiguration as shared_loadbasedautoscalingconfiguration


@dataclass_json
@dataclasses.dataclass
class DescribeLoadBasedAutoScalingResult:
    r"""DescribeLoadBasedAutoScalingResult
    Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.
    """
    
    load_based_auto_scaling_configurations: Optional[list[shared_loadbasedautoscalingconfiguration.LoadBasedAutoScalingConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadBasedAutoScalingConfigurations') }})
    
