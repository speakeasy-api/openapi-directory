import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetCapacityReservationUsageResult:
    available_instance_count: Optional[dict[str, Any]] = dataclasses.field(default=None)
    capacity_reservation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_usages: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    total_instance_count: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
