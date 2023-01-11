import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeCapacityReservationsResult:
    capacity_reservations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
