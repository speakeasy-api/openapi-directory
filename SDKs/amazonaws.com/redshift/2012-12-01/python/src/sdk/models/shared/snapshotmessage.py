import dataclasses
from typing import Optional
from ..shared import snapshotlist as shared_snapshotlist


@dataclasses.dataclass
class SnapshotMessage:
    r"""SnapshotMessage
    Contains the output from the <a>DescribeClusterSnapshots</a> action. 
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    snapshots: Optional[list[shared_snapshotlist.SnapshotList]] = dataclasses.field(default=None)
    
