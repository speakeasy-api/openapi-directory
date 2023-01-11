import dataclasses
from typing import Optional
from ..shared import snapshotcopygrant as shared_snapshotcopygrant


@dataclasses.dataclass
class CreateSnapshotCopyGrantResult:
    snapshot_copy_grant: Optional[shared_snapshotcopygrant.SnapshotCopyGrant] = dataclasses.field(default=None)
    
