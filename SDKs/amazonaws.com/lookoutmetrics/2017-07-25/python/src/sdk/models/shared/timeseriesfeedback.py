import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TimeSeriesFeedback:
    r"""TimeSeriesFeedback
    Details about feedback submitted for an anomalous metric.
    """
    
    is_anomaly: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAnomaly') }})
    time_series_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSeriesId') }})
    
