import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class MoveAddressToVpcResult:
    allocation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
