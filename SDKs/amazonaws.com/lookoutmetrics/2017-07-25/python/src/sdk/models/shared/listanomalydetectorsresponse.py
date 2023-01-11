import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anomalydetectorsummary as shared_anomalydetectorsummary


@dataclass_json
@dataclasses.dataclass
class ListAnomalyDetectorsResponse:
    anomaly_detector_summary_list: Optional[list[shared_anomalydetectorsummary.AnomalyDetectorSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
