import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProvisionByoipCidrResultByoipCidr:
    r"""ProvisionByoipCidrResultByoipCidr
    Information about the address range.
    """
    
    cidr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ProvisionByoipCidrResult:
    byoip_cidr: Optional[ProvisionByoipCidrResultByoipCidr] = dataclasses.field(default=None)
    
