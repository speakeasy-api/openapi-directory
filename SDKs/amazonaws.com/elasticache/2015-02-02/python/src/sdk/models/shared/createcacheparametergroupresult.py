import dataclasses
from typing import Optional
from ..shared import cacheparametergroup as shared_cacheparametergroup


@dataclasses.dataclass
class CreateCacheParameterGroupResult:
    cache_parameter_group: Optional[shared_cacheparametergroup.CacheParameterGroup] = dataclasses.field(default=None)
    
