import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeprovisionByoipCidrResultByoipCidr:
    r"""DeprovisionByoipCidrResultByoipCidr
    Information about the address range.
    """
    
    cidr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeprovisionByoipCidrResult:
    byoip_cidr: Optional[DeprovisionByoipCidrResultByoipCidr] = dataclasses.field(default=None)
    
