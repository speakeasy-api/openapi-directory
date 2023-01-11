import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeReplaceRootVolumeTasksResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    replace_root_volume_tasks: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
