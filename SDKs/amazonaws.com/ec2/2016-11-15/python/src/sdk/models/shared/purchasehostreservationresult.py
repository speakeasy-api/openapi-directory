import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PurchaseHostReservationResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    currency_code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    purchase: Optional[dict[str, Any]] = dataclasses.field(default=None)
    total_hourly_price: Optional[dict[str, Any]] = dataclasses.field(default=None)
    total_upfront_price: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
