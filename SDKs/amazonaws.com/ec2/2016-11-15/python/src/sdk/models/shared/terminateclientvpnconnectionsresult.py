import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class TerminateClientVpnConnectionsResult:
    client_vpn_endpoint_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    connection_statuses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    username: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
