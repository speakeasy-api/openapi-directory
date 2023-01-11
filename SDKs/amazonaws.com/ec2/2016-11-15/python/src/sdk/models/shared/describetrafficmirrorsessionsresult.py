import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTrafficMirrorSessionsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_sessions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
