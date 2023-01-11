import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendedoptionprojectedmetric as shared_recommendedoptionprojectedmetric


@dataclass_json
@dataclasses.dataclass
class GetEc2RecommendationProjectedMetricsResponse:
    recommended_option_projected_metrics: Optional[list[shared_recommendedoptionprojectedmetric.RecommendedOptionProjectedMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedOptionProjectedMetrics') }})
    
