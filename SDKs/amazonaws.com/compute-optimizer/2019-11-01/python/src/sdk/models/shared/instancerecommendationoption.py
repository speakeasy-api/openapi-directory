import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import platformdifference_enum as shared_platformdifference_enum
from ..shared import utilizationmetric as shared_utilizationmetric


@dataclass_json
@dataclasses.dataclass
class InstanceRecommendationOption:
    r"""InstanceRecommendationOption
    Describes a recommendation option for an Amazon EC2 instance.
    """
    
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    performance_risk: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceRisk') }})
    platform_differences: Optional[list[shared_platformdifference_enum.PlatformDifferenceEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformDifferences') }})
    projected_utilization_metrics: Optional[list[shared_utilizationmetric.UtilizationMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectedUtilizationMetrics') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
