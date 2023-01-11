import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import noderangeproperty as shared_noderangeproperty


@dataclass_json
@dataclasses.dataclass
class NodeProperties:
    r"""NodeProperties
    An object representing the node properties of a multi-node parallel job.
    """
    
    main_node: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainNode') }})
    node_range_properties: list[shared_noderangeproperty.NodeRangeProperty] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeRangeProperties') }})
    num_nodes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numNodes') }})
    
