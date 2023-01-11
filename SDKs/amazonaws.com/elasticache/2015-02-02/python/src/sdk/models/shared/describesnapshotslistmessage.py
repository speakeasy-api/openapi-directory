import dataclasses
from typing import Optional
from ..shared import snapshotlist as shared_snapshotlist


@dataclasses.dataclass
class DescribeSnapshotsListMessage:
    r"""DescribeSnapshotsListMessage
    Represents the output of a <code>DescribeSnapshots</code> operation.
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    snapshots: Optional[list[shared_snapshotlist.SnapshotList]] = dataclasses.field(default=None)
    
