import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyHostsResult:
    successful: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unsuccessful: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
