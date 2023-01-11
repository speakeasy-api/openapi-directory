import dataclasses
from typing import Optional
from ..shared import dimension as shared_dimension


@dataclasses.dataclass
class Metric:
    r"""Metric
    Represents a specific metric.
    """
    
    dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None)
    metric_name: Optional[str] = dataclasses.field(default=None)
    namespace: Optional[str] = dataclasses.field(default=None)
    
