import dataclasses
from typing import Optional
from ..shared import cachesubnetgroups as shared_cachesubnetgroups


@dataclasses.dataclass
class CacheSubnetGroupMessage:
    r"""CacheSubnetGroupMessage
    Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
    """
    
    cache_subnet_groups: Optional[list[shared_cachesubnetgroups.CacheSubnetGroups]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
