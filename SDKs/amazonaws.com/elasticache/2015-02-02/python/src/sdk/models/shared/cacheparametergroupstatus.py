import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CacheParameterGroupStatus:
    r"""CacheParameterGroupStatus
    Status of the cache parameter group.
    """
    
    cache_node_ids_to_reboot: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    cache_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    parameter_apply_status: Optional[str] = dataclasses.field(default=None)
    
