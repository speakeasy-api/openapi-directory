import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DisassociateClientVpnTargetNetworkResultStatus:
    r"""DisassociateClientVpnTargetNetworkResultStatus
    The current state of the target network association.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateClientVpnTargetNetworkResult:
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[DisassociateClientVpnTargetNetworkResultStatus] = dataclasses.field(default=None)
    
