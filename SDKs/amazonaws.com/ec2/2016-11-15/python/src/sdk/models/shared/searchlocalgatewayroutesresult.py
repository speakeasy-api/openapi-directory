import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SearchLocalGatewayRoutesResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    routes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
