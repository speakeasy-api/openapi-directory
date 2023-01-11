import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class MonitorInstancesResult:
    instance_monitorings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
