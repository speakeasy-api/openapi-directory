import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteClientVpnRouteResultStatus:
    r"""DeleteClientVpnRouteResultStatus
    The current state of the route.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteClientVpnRouteResult:
    status: Optional[DeleteClientVpnRouteResultStatus] = dataclasses.field(default=None)
    
