import dataclasses
from typing import Optional
from ..shared import cluster as shared_cluster


@dataclasses.dataclass
class ResumeClusterResult:
    cluster: Optional[shared_cluster.Cluster] = dataclasses.field(default=None)
    
