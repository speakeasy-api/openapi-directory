import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class TerminateInstancesResult:
    terminating_instances: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
