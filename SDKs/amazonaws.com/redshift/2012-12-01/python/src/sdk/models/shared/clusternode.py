import dataclasses
from typing import Optional


@dataclasses.dataclass
class ClusterNode:
    r"""ClusterNode
    The identifier of a node in a cluster.
    """
    
    node_role: Optional[str] = dataclasses.field(default=None)
    private_ip_address: Optional[str] = dataclasses.field(default=None)
    public_ip_address: Optional[str] = dataclasses.field(default=None)
    
