import dataclasses
from typing import Optional
from ..shared import snapshot as shared_snapshot


@dataclasses.dataclass
class RevokeSnapshotAccessResult:
    snapshot: Optional[shared_snapshot.Snapshot] = dataclasses.field(default=None)
    
