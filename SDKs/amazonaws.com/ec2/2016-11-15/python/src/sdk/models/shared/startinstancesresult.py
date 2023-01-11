import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StartInstancesResult:
    starting_instances: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
