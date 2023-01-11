import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionmetric as shared_dimensionmetric
from ..shared import evaluationcycle as shared_evaluationcycle


@dataclass_json
@dataclasses.dataclass
class GetCustomerServiceMetricResponse:
    r"""GetCustomerServiceMetricResponse
    This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered.
    """
    
    dimension_metrics: Optional[list[shared_dimensionmetric.DimensionMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionMetrics') }})
    evaluation_cycle: Optional[shared_evaluationcycle.EvaluationCycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationCycle') }})
    marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    
