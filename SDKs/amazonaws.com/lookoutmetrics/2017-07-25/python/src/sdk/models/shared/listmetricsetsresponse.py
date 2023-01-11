import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricsetsummary as shared_metricsetsummary


@dataclass_json
@dataclasses.dataclass
class ListMetricSetsResponse:
    metric_set_summary_list: Optional[list[shared_metricsetsummary.MetricSetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
