import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeConversionTasksResult:
    conversion_tasks: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
