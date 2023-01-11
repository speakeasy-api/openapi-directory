import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpnConnectionsResult:
    r"""DescribeVpnConnectionsResult
    Contains the output of DescribeVpnConnections.
    """
    
    vpn_connections: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
