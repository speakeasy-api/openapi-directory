import dataclasses
from typing import Optional
from ..shared import metricstreamentry as shared_metricstreamentry


@dataclasses.dataclass
class ListMetricStreamsOutput:
    entries: Optional[list[shared_metricstreamentry.MetricStreamEntry]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
