import dataclasses
from typing import Optional


@dataclasses.dataclass
class ClusterSnapshotCopyStatus:
    r"""ClusterSnapshotCopyStatus
    Returns the destination region and retention period that are configured for cross-region snapshot copy.
    """
    
    destination_region: Optional[str] = dataclasses.field(default=None)
    manual_snapshot_retention_period: Optional[int] = dataclasses.field(default=None)
    retention_period: Optional[int] = dataclasses.field(default=None)
    snapshot_copy_grant_name: Optional[str] = dataclasses.field(default=None)
    
