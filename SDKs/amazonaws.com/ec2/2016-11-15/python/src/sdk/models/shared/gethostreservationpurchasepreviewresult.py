import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetHostReservationPurchasePreviewResult:
    currency_code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    purchase: Optional[dict[str, Any]] = dataclasses.field(default=None)
    total_hourly_price: Optional[dict[str, Any]] = dataclasses.field(default=None)
    total_upfront_price: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
