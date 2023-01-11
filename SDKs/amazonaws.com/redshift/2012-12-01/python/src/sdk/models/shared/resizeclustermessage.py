import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResizeClusterMessage:
    r"""ResizeClusterMessage
    Describes a resize cluster operation. For example, a scheduled action to run the <code>ResizeCluster</code> API operation. 
    """
    
    cluster_identifier: str = dataclasses.field()
    classic: Optional[bool] = dataclasses.field(default=None)
    cluster_type: Optional[str] = dataclasses.field(default=None)
    node_type: Optional[str] = dataclasses.field(default=None)
    number_of_nodes: Optional[int] = dataclasses.field(default=None)
    
