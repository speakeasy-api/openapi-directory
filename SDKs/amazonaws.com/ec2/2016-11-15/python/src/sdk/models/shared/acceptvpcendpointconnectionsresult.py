import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AcceptVpcEndpointConnectionsResult:
    unsuccessful: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
