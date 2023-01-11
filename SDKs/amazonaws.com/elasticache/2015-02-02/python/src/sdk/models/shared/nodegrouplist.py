import dataclasses
from typing import Optional
from ..shared import nodegroupmemberlist as shared_nodegroupmemberlist
from ..shared import endpoint as shared_endpoint


@dataclasses.dataclass
class NodeGroupList:
    r"""NodeGroupList
    Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
    """
    
    node_group_id: Optional[str] = dataclasses.field(default=None)
    node_group_members: Optional[list[shared_nodegroupmemberlist.NodeGroupMemberList]] = dataclasses.field(default=None)
    primary_endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None)
    reader_endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None)
    slots: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
