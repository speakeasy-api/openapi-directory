import dataclasses
from typing import Optional
from ..shared import messagedata as shared_messagedata
from ..shared import metricdataresult as shared_metricdataresult


@dataclasses.dataclass
class GetMetricDataOutput:
    messages: Optional[list[shared_messagedata.MessageData]] = dataclasses.field(default=None)
    metric_data_results: Optional[list[shared_metricdataresult.MetricDataResult]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
