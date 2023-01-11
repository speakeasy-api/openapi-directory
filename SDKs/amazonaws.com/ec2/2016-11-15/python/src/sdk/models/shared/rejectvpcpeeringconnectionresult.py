import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RejectVpcPeeringConnectionResult:
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
