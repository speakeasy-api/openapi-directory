import dataclasses
from typing import Optional
from enum import Enum
from ..shared import metrictype_enum as shared_metrictype_enum


@dataclasses.dataclass
class PredefinedMetricSpecification:
    r"""PredefinedMetricSpecification
    Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.
    """
    
    predefined_metric_type: shared_metrictype_enum.MetricTypeEnum = dataclasses.field()
    resource_label: Optional[str] = dataclasses.field(default=None)
    
