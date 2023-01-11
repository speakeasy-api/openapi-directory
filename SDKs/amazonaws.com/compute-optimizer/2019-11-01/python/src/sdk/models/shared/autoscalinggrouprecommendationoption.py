import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalinggroupconfiguration as shared_autoscalinggroupconfiguration
from ..shared import utilizationmetric as shared_utilizationmetric


@dataclass_json
@dataclasses.dataclass
class AutoScalingGroupRecommendationOption:
    r"""AutoScalingGroupRecommendationOption
    Describes a recommendation option for an Auto Scaling group.
    """
    
    configuration: Optional[shared_autoscalinggroupconfiguration.AutoScalingGroupConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    performance_risk: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceRisk') }})
    projected_utilization_metrics: Optional[list[shared_utilizationmetric.UtilizationMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectedUtilizationMetrics') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
