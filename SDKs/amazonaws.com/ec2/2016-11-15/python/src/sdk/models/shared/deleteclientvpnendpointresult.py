import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteClientVpnEndpointResultStatus:
    r"""DeleteClientVpnEndpointResultStatus
    The current state of the Client VPN endpoint.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteClientVpnEndpointResult:
    status: Optional[DeleteClientVpnEndpointResultStatus] = dataclasses.field(default=None)
    
