import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetGroupsForCapacityReservationResult:
    capacity_reservation_groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
