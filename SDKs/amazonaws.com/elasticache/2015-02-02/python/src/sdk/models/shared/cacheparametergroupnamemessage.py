import dataclasses
from typing import Optional


@dataclasses.dataclass
class CacheParameterGroupNameMessage:
    r"""CacheParameterGroupNameMessage
    <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>ModifyCacheParameterGroup</code> </p> </li> <li> <p> <code>ResetCacheParameterGroup</code> </p> </li> </ul>
    """
    
    cache_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    
