import dataclasses
from typing import Optional
from enum import Enum
from ..shared import predefinedmetricpairtype_enum as shared_predefinedmetricpairtype_enum


@dataclasses.dataclass
class PredictiveScalingPredefinedMetricPair:
    r"""PredictiveScalingPredefinedMetricPair
    Represents a metric pair for a predictive scaling policy. 
    """
    
    predefined_metric_type: shared_predefinedmetricpairtype_enum.PredefinedMetricPairTypeEnum = dataclasses.field()
    resource_label: Optional[str] = dataclasses.field(default=None)
    
