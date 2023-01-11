import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeBundleTasksResult:
    bundle_tasks: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
