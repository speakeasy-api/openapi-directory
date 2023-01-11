import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class WithdrawByoipCidrResultByoipCidr:
    r"""WithdrawByoipCidrResultByoipCidr
    Information about the address pool.
    """
    
    cidr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class WithdrawByoipCidrResult:
    byoip_cidr: Optional[WithdrawByoipCidrResultByoipCidr] = dataclasses.field(default=None)
    
