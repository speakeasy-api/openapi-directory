import dataclasses
from typing import Optional
from ..shared import dbclustersnapshotattributelist as shared_dbclustersnapshotattributelist


@dataclasses.dataclass
class DbClusterSnapshotAttributesResult:
    r"""DbClusterSnapshotAttributesResult
    Detailed information about the attributes that are associated with a cluster snapshot.
    """
    
    db_cluster_snapshot_attributes: Optional[list[shared_dbclustersnapshotattributelist.DbClusterSnapshotAttributeList]] = dataclasses.field(default=None)
    db_cluster_snapshot_identifier: Optional[str] = dataclasses.field(default=None)
    
