import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AuthorizeClientVpnIngressResultStatus:
    r"""AuthorizeClientVpnIngressResultStatus
    The current state of the authorization rule.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AuthorizeClientVpnIngressResult:
    status: Optional[AuthorizeClientVpnIngressResultStatus] = dataclasses.field(default=None)
    
