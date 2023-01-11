import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdafunctionmemoryprojectedmetric as shared_lambdafunctionmemoryprojectedmetric


@dataclass_json
@dataclasses.dataclass
class LambdaFunctionMemoryRecommendationOption:
    r"""LambdaFunctionMemoryRecommendationOption
    Describes a recommendation option for an Lambda function.
    """
    
    memory_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySize') }})
    projected_utilization_metrics: Optional[list[shared_lambdafunctionmemoryprojectedmetric.LambdaFunctionMemoryProjectedMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectedUtilizationMetrics') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
