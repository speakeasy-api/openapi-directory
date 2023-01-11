import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeInstanceEventWindowsResult:
    instance_event_windows: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
