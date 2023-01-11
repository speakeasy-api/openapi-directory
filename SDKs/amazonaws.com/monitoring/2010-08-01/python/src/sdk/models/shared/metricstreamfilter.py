import dataclasses
from typing import Optional


@dataclasses.dataclass
class MetricStreamFilter:
    r"""MetricStreamFilter
    This structure contains the name of one of the metric namespaces that is listed in a filter of a metric stream.
    """
    
    namespace: Optional[str] = dataclasses.field(default=None)
    
