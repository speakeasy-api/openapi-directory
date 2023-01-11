import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DisassociateTrunkInterfaceResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
