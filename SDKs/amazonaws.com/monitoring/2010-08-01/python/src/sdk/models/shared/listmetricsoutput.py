import dataclasses
from typing import Optional
from ..shared import metric as shared_metric


@dataclasses.dataclass
class ListMetricsOutput:
    metrics: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
