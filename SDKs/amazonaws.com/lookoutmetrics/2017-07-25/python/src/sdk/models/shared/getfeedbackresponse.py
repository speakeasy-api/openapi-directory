import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeseriesfeedback as shared_timeseriesfeedback


@dataclass_json
@dataclasses.dataclass
class GetFeedbackResponse:
    anomaly_group_time_series_feedback: Optional[list[shared_timeseriesfeedback.TimeSeriesFeedback]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupTimeSeriesFeedback') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
