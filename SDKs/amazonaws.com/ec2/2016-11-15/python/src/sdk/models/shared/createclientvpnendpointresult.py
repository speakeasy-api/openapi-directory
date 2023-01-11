import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateClientVpnEndpointResultStatus:
    r"""CreateClientVpnEndpointResultStatus
    The current state of the Client VPN endpoint.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateClientVpnEndpointResult:
    client_vpn_endpoint_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    dns_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[CreateClientVpnEndpointResultStatus] = dataclasses.field(default=None)
    
