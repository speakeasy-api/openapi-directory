import dataclasses
from typing import Optional
from ..shared import dbclustersnapshotattributelist as shared_dbclustersnapshotattributelist


@dataclasses.dataclass
class DbClusterSnapshotAttributesResult:
    r"""DbClusterSnapshotAttributesResult
    <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
    """
    
    db_cluster_snapshot_attributes: Optional[list[shared_dbclustersnapshotattributelist.DbClusterSnapshotAttributeList]] = dataclasses.field(default=None)
    db_cluster_snapshot_identifier: Optional[str] = dataclasses.field(default=None)
    
