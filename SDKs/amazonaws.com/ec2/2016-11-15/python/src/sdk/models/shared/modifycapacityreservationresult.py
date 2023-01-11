import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyCapacityReservationResult:
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
