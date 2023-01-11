import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcemetadata as shared_resourcemetadata
from ..shared import virtualnodespec as shared_virtualnodespec
from ..shared import virtualnodestatus as shared_virtualnodestatus


@dataclass_json
@dataclasses.dataclass
class VirtualNodeData:
    r"""VirtualNodeData
    An object that represents a virtual node returned by a describe operation.
    """
    
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: shared_resourcemetadata.ResourceMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: shared_virtualnodespec.VirtualNodeSpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: shared_virtualnodestatus.VirtualNodeStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_node_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNodeName') }})
    
