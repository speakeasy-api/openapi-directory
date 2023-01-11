import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ItemizedMetricStats:
    r"""ItemizedMetricStats
    Aggregated statistics about a measure affected by an anomaly.
    """
    
    metric_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    occurrence_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OccurrenceCount') }})
    
