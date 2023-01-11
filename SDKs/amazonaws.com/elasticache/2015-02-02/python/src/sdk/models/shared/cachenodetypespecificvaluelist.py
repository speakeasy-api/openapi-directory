import dataclasses
from typing import Optional


@dataclasses.dataclass
class CacheNodeTypeSpecificValueList:
    r"""CacheNodeTypeSpecificValueList
    A value that applies only to a certain cache node type.
    """
    
    cache_node_type: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
