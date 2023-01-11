import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contributionmatrix as shared_contributionmatrix


@dataclass_json
@dataclasses.dataclass
class MetricLevelImpact:
    r"""MetricLevelImpact
    Details about a measure affected by an anomaly.
    """
    
    contribution_matrix: Optional[shared_contributionmatrix.ContributionMatrix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContributionMatrix') }})
    metric_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    num_time_series: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumTimeSeries') }})
    
