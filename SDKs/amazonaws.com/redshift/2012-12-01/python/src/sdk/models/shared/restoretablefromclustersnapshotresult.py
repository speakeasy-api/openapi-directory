import dataclasses
from typing import Optional
from ..shared import tablerestorestatus as shared_tablerestorestatus


@dataclasses.dataclass
class RestoreTableFromClusterSnapshotResult:
    table_restore_status: Optional[shared_tablerestorestatus.TableRestoreStatus] = dataclasses.field(default=None)
    
