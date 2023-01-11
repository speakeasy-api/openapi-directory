import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTrafficMirrorFiltersResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    traffic_mirror_filters: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
