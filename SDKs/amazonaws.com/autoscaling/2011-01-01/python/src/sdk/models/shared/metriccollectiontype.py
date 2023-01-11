import dataclasses
from typing import Optional


@dataclasses.dataclass
class MetricCollectionType:
    r"""MetricCollectionType
    Describes a metric.
    """
    
    metric: Optional[str] = dataclasses.field(default=None)
    
