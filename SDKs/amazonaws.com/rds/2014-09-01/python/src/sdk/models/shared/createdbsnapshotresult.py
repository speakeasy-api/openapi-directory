import dataclasses
from typing import Optional
from ..shared import dbsnapshot as shared_dbsnapshot


@dataclasses.dataclass
class CreateDbSnapshotResult:
    db_snapshot: Optional[shared_dbsnapshot.DbSnapshot] = dataclasses.field(default=None)
    
