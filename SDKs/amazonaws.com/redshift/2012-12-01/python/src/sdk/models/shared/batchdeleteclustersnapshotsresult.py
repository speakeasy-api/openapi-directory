import dataclasses
from typing import Any,Optional
from ..shared import batchsnapshotoperationerrorlist as shared_batchsnapshotoperationerrorlist


@dataclasses.dataclass
class BatchDeleteClusterSnapshotsResult:
    errors: Optional[list[shared_batchsnapshotoperationerrorlist.BatchSnapshotOperationErrorList]] = dataclasses.field(default=None)
    resources: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
