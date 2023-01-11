import dataclasses
from typing import Optional
from enum import Enum
from ..shared import predefinedloadmetrictype_enum as shared_predefinedloadmetrictype_enum


@dataclasses.dataclass
class PredictiveScalingPredefinedLoadMetric:
    r"""PredictiveScalingPredefinedLoadMetric
    <p>Describes a load metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>
    """
    
    predefined_metric_type: shared_predefinedloadmetrictype_enum.PredefinedLoadMetricTypeEnum = dataclasses.field()
    resource_label: Optional[str] = dataclasses.field(default=None)
    
