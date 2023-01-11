import dataclasses
from typing import Optional
from ..shared import cachecluster as shared_cachecluster


@dataclasses.dataclass
class DeleteCacheClusterResult:
    cache_cluster: Optional[shared_cachecluster.CacheCluster] = dataclasses.field(default=None)
    
