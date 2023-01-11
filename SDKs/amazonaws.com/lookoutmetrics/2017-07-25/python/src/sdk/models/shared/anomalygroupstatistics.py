import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import itemizedmetricstats as shared_itemizedmetricstats


@dataclass_json
@dataclasses.dataclass
class AnomalyGroupStatistics:
    r"""AnomalyGroupStatistics
    Aggregated statistics for a group of anomalous metrics.
    """
    
    evaluation_start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationStartDate') }})
    itemized_metric_stats_list: Optional[list[shared_itemizedmetricstats.ItemizedMetricStats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemizedMetricStatsList') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
