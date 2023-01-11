import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anomalygroupstatistics as shared_anomalygroupstatistics
from ..shared import anomalygroupsummary as shared_anomalygroupsummary


@dataclass_json
@dataclasses.dataclass
class ListAnomalyGroupSummariesResponse:
    anomaly_group_statistics: Optional[shared_anomalygroupstatistics.AnomalyGroupStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupStatistics') }})
    anomaly_group_summary_list: Optional[list[shared_anomalygroupsummary.AnomalyGroupSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
