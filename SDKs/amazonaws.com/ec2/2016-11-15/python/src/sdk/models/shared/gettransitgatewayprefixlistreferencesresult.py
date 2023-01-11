import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetTransitGatewayPrefixListReferencesResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_prefix_list_references: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
