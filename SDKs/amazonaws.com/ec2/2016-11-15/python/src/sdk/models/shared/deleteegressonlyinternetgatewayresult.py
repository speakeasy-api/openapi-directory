import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteEgressOnlyInternetGatewayResult:
    return_code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
