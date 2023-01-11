import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RevokeClientVpnIngressResultStatus:
    r"""RevokeClientVpnIngressResultStatus
    The current state of the authorization rule.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RevokeClientVpnIngressResult:
    status: Optional[RevokeClientVpnIngressResultStatus] = dataclasses.field(default=None)
    
