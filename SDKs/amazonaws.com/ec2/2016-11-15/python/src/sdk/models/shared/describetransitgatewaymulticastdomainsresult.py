import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTransitGatewayMulticastDomainsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domains: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
