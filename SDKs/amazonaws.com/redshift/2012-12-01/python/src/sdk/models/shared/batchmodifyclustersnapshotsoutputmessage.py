import dataclasses
from typing import Any,Optional
from ..shared import batchsnapshotoperationerrors as shared_batchsnapshotoperationerrors


@dataclasses.dataclass
class BatchModifyClusterSnapshotsOutputMessage:
    errors: Optional[list[shared_batchsnapshotoperationerrors.BatchSnapshotOperationErrors]] = dataclasses.field(default=None)
    resources: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
