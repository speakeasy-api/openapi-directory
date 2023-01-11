import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StopInstancesResult:
    stopping_instances: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
