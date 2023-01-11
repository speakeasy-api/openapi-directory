import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSubnetCidrReservationsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_ipv4_cidr_reservations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_ipv6_cidr_reservations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
