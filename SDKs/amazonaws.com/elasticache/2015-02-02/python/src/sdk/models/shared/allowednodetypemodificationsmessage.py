import dataclasses
from typing import Optional


@dataclasses.dataclass
class AllowedNodeTypeModificationsMessage:
    r"""AllowedNodeTypeModificationsMessage
    Represents the allowed node types you can use to modify your cluster or replication group.
    """
    
    scale_down_modifications: Optional[list[str]] = dataclasses.field(default=None)
    scale_up_modifications: Optional[list[str]] = dataclasses.field(default=None)
    
