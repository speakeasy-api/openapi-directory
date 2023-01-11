import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateClientVpnRouteResultStatus:
    r"""CreateClientVpnRouteResultStatus
    The current state of the route.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateClientVpnRouteResult:
    status: Optional[CreateClientVpnRouteResultStatus] = dataclasses.field(default=None)
    
