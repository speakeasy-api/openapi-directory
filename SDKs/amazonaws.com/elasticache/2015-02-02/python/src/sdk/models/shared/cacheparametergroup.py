import dataclasses
from typing import Optional


@dataclasses.dataclass
class CacheParameterGroup:
    r"""CacheParameterGroup
    Represents the output of a <code>CreateCacheParameterGroup</code> operation.
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    cache_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    cache_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    is_global: Optional[bool] = dataclasses.field(default=None)
    
