import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteNatGatewayResult:
    nat_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
