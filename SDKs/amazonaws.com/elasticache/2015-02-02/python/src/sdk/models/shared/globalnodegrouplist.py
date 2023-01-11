import dataclasses
from typing import Optional


@dataclasses.dataclass
class GlobalNodeGroupList:
    r"""GlobalNodeGroupList
    Indicates the slot configuration and global identifier for a slice group.
    """
    
    global_node_group_id: Optional[str] = dataclasses.field(default=None)
    slots: Optional[str] = dataclasses.field(default=None)
    
