import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ConfirmProductInstanceResult:
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
