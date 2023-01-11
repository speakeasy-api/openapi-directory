import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateSnapshotsResult:
    snapshots: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
