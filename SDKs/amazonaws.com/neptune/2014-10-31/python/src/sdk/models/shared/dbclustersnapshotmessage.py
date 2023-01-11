import dataclasses
from typing import Optional
from ..shared import dbclustersnapshotlist as shared_dbclustersnapshotlist


@dataclasses.dataclass
class DbClusterSnapshotMessage:
    db_cluster_snapshots: Optional[list[shared_dbclustersnapshotlist.DbClusterSnapshotList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
