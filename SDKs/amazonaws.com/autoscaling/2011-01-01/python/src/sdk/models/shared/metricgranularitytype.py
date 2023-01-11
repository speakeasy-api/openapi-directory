import dataclasses
from typing import Optional


@dataclasses.dataclass
class MetricGranularityType:
    r"""MetricGranularityType
    Describes a granularity of a metric.
    """
    
    granularity: Optional[str] = dataclasses.field(default=None)
    
