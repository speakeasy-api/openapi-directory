import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SearchTransitGatewayRoutesResult:
    additional_routes_available: Optional[dict[str, Any]] = dataclasses.field(default=None)
    routes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
