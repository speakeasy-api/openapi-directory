import dataclasses
from typing import Optional
from ..shared import dbclustersnapshot as shared_dbclustersnapshot


@dataclasses.dataclass
class DeleteDbClusterSnapshotResult:
    db_cluster_snapshot: Optional[shared_dbclustersnapshot.DbClusterSnapshot] = dataclasses.field(default=None)
    
