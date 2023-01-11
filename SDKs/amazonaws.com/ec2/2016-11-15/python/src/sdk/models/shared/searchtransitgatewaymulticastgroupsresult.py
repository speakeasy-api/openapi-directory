import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SearchTransitGatewayMulticastGroupsResult:
    multicast_groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
