import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VirtualNodeServiceProvider:
    r"""VirtualNodeServiceProvider
    An object that represents a virtual node service provider.
    """
    
    virtual_node_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNodeName') }})
    
