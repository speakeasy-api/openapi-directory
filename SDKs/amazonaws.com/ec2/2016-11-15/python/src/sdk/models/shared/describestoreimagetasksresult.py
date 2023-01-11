import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeStoreImageTasksResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    store_image_task_results: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
