import dataclasses
from typing import Optional
from ..shared import anomalydetector as shared_anomalydetector


@dataclasses.dataclass
class DescribeAnomalyDetectorsOutput:
    anomaly_detectors: Optional[list[shared_anomalydetector.AnomalyDetector]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
