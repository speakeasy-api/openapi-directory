import dataclasses
from typing import Optional
from enum import Enum
from ..shared import anomalydetectorconfiguration as shared_anomalydetectorconfiguration
from ..shared import dimension as shared_dimension
from ..shared import anomalydetectorstatevalue_enum as shared_anomalydetectorstatevalue_enum


@dataclasses.dataclass
class AnomalyDetector:
    r"""AnomalyDetector
    An anomaly detection model associated with a particular CloudWatch metric and statistic. You can use the model to display a band of expected normal values when the metric is graphed.
    """
    
    configuration: Optional[shared_anomalydetectorconfiguration.AnomalyDetectorConfiguration] = dataclasses.field(default=None)
    dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None)
    metric_name: Optional[str] = dataclasses.field(default=None)
    namespace: Optional[str] = dataclasses.field(default=None)
    stat: Optional[str] = dataclasses.field(default=None)
    state_value: Optional[shared_anomalydetectorstatevalue_enum.AnomalyDetectorStateValueEnum] = dataclasses.field(default=None)
    
