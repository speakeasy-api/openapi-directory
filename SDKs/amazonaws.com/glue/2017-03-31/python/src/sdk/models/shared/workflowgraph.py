import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import edge as shared_edge
from ..shared import node as shared_node


@dataclass_json
@dataclasses.dataclass
class WorkflowGraph:
    r"""WorkflowGraph
    A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them.
    """
    
    edges: Optional[list[shared_edge.Edge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Edges') }})
    nodes: Optional[list[shared_node.Node]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nodes') }})
    
