import dataclasses
from typing import Optional


@dataclasses.dataclass
class BatchSnapshotOperationErrors:
    r"""BatchSnapshotOperationErrors
    Describes the errors returned by a snapshot.
    """
    
    failure_code: Optional[str] = dataclasses.field(default=None)
    failure_reason: Optional[str] = dataclasses.field(default=None)
    snapshot_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    snapshot_identifier: Optional[str] = dataclasses.field(default=None)
    
