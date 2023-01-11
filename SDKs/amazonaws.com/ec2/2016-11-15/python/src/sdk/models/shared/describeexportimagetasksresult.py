import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeExportImageTasksResult:
    export_image_tasks: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
