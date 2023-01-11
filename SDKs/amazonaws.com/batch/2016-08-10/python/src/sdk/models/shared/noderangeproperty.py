import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerproperties as shared_containerproperties


@dataclass_json
@dataclasses.dataclass
class NodeRangeProperty:
    r"""NodeRangeProperty
    An object representing the properties of the node range for a multi-node parallel job.
    """
    
    target_nodes: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNodes') }})
    container: Optional[shared_containerproperties.ContainerProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    
