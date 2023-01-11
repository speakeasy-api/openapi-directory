import dataclasses
from typing import Optional
from ..shared import dbcluster as shared_dbcluster


@dataclasses.dataclass
class RestoreDbClusterToPointInTimeResult:
    db_cluster: Optional[shared_dbcluster.DbCluster] = dataclasses.field(default=None)
    
