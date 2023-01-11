import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeClientVpnEndpointsResult:
    client_vpn_endpoints: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
