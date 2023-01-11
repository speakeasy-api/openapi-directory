import dataclasses
from typing import Optional


@dataclasses.dataclass
class EnabledMetric:
    r"""EnabledMetric
    Describes an enabled metric.
    """
    
    granularity: Optional[str] = dataclasses.field(default=None)
    metric: Optional[str] = dataclasses.field(default=None)
    
