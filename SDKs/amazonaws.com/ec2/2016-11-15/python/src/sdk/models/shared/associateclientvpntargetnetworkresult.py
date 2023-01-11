import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssociateClientVpnTargetNetworkResultStatus:
    r"""AssociateClientVpnTargetNetworkResultStatus
    The current state of the target network association.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateClientVpnTargetNetworkResult:
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[AssociateClientVpnTargetNetworkResultStatus] = dataclasses.field(default=None)
    
