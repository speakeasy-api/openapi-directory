import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CopySnapshotResult:
    snapshot_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
