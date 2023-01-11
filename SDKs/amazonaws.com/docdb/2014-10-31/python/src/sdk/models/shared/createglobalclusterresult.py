import dataclasses
from typing import Optional
from ..shared import globalcluster as shared_globalcluster


@dataclasses.dataclass
class CreateGlobalClusterResult:
    global_cluster: Optional[shared_globalcluster.GlobalCluster] = dataclasses.field(default=None)
    
