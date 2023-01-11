import dataclasses
from typing import Optional
from ..shared import datapoint as shared_datapoint


@dataclasses.dataclass
class GetMetricStatisticsOutput:
    datapoints: Optional[list[shared_datapoint.Datapoint]] = dataclasses.field(default=None)
    label: Optional[str] = dataclasses.field(default=None)
    
