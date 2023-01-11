import dataclasses
from typing import Optional
from ..shared import cachesubnetgroup as shared_cachesubnetgroup


@dataclasses.dataclass
class ModifyCacheSubnetGroupResult:
    cache_subnet_group: Optional[shared_cachesubnetgroup.CacheSubnetGroup] = dataclasses.field(default=None)
    
