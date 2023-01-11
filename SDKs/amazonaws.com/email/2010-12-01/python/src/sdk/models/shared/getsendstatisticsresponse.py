import dataclasses
from typing import Optional
from ..shared import senddatapoint as shared_senddatapoint


@dataclasses.dataclass
class GetSendStatisticsResponse:
    r"""GetSendStatisticsResponse
    Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.
    """
    
    send_data_points: Optional[list[shared_senddatapoint.SendDataPoint]] = dataclasses.field(default=None)
    
