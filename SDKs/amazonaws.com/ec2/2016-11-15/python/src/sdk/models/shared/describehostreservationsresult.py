import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeHostReservationsResult:
    host_reservation_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
