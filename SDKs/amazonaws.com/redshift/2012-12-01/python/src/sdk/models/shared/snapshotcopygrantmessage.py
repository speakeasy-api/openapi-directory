import dataclasses
from typing import Optional
from ..shared import snapshotcopygrantlist as shared_snapshotcopygrantlist


@dataclasses.dataclass
class SnapshotCopyGrantMessage:
    r"""SnapshotCopyGrantMessage
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    snapshot_copy_grants: Optional[list[shared_snapshotcopygrantlist.SnapshotCopyGrantList]] = dataclasses.field(default=None)
    
