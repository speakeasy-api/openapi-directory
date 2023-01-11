import dataclasses
from typing import Optional
from ..shared import dbclustersnapshotattributesresult as shared_dbclustersnapshotattributesresult


@dataclasses.dataclass
class ModifyDbClusterSnapshotAttributeResult:
    db_cluster_snapshot_attributes_result: Optional[shared_dbclustersnapshotattributesresult.DbClusterSnapshotAttributesResult] = dataclasses.field(default=None)
    
