import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpnGatewaysResult:
    r"""DescribeVpnGatewaysResult
    Contains the output of DescribeVpnGateways.
    """
    
    vpn_gateways: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
