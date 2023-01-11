import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeLocalGatewayVirtualInterfacesResult:
    local_gateway_virtual_interfaces: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
