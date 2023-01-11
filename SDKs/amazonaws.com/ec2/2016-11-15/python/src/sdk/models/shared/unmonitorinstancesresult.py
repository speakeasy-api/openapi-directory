import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class UnmonitorInstancesResult:
    instance_monitorings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
