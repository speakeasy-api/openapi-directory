import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVolumeStatusResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volume_statuses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
