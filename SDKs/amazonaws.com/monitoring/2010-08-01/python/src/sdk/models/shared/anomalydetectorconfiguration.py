import dataclasses
from typing import Optional
from ..shared import range as shared_range


@dataclasses.dataclass
class AnomalyDetectorConfiguration:
    r"""AnomalyDetectorConfiguration
    The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.
    """
    
    excluded_time_ranges: Optional[list[shared_range.Range]] = dataclasses.field(default=None)
    metric_timezone: Optional[str] = dataclasses.field(default=None)
    
