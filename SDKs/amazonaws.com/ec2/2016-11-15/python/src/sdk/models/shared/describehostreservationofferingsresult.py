import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeHostReservationOfferingsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    offering_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
