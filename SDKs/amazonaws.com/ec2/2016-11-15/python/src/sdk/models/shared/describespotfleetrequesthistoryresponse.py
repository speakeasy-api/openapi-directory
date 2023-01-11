import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSpotFleetRequestHistoryResponse:
    r"""DescribeSpotFleetRequestHistoryResponse
    Contains the output of DescribeSpotFleetRequestHistory.
    """
    
    history_records: Optional[dict[str, Any]] = dataclasses.field(default=None)
    last_evaluated_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    spot_fleet_request_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    start_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
