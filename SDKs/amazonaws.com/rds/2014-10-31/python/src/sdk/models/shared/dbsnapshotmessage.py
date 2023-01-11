import dataclasses
from typing import Optional
from ..shared import dbsnapshotlist as shared_dbsnapshotlist


@dataclasses.dataclass
class DbSnapshotMessage:
    r"""DbSnapshotMessage
     Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action. 
    """
    
    db_snapshots: Optional[list[shared_dbsnapshotlist.DbSnapshotList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
