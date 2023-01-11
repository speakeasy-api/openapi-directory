import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateRouteResult:
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
