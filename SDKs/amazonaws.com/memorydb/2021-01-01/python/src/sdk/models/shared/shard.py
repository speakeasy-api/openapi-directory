import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node as shared_node


@dataclass_json
@dataclasses.dataclass
class Shard:
    r"""Shard
    Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    nodes: Optional[list[shared_node.Node]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nodes') }})
    number_of_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfNodes') }})
    slots: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slots') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
