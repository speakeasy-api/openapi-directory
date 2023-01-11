import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTrafficMirrorTargetsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_targets: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
