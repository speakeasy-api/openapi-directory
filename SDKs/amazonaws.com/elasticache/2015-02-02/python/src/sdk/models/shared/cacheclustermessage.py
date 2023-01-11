import dataclasses
from typing import Optional
from ..shared import cacheclusterlist as shared_cacheclusterlist


@dataclasses.dataclass
class CacheClusterMessage:
    r"""CacheClusterMessage
    Represents the output of a <code>DescribeCacheClusters</code> operation.
    """
    
    cache_clusters: Optional[list[shared_cacheclusterlist.CacheClusterList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
