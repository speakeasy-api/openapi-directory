import dataclasses
from typing import Optional
from ..shared import dbclustersnapshotlist as shared_dbclustersnapshotlist


@dataclasses.dataclass
class DbClusterSnapshotMessage:
    r"""DbClusterSnapshotMessage
     Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action. 
    """
    
    db_cluster_snapshots: Optional[list[shared_dbclustersnapshotlist.DbClusterSnapshotList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
