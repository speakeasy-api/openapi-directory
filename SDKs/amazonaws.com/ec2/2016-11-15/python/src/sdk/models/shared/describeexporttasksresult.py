import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeExportTasksResult:
    export_tasks: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
