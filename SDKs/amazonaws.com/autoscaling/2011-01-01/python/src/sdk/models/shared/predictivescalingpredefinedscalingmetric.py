import dataclasses
from typing import Optional
from enum import Enum
from ..shared import predefinedscalingmetrictype_enum as shared_predefinedscalingmetrictype_enum


@dataclasses.dataclass
class PredictiveScalingPredefinedScalingMetric:
    r"""PredictiveScalingPredefinedScalingMetric
    <p>Describes a scaling metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>
    """
    
    predefined_metric_type: shared_predefinedscalingmetrictype_enum.PredefinedScalingMetricTypeEnum = dataclasses.field()
    resource_label: Optional[str] = dataclasses.field(default=None)
    
