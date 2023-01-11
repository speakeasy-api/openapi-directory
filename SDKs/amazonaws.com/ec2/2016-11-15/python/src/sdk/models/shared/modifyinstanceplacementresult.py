import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyInstancePlacementResult:
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
