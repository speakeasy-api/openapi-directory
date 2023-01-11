import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSnapshotsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    snapshots: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
