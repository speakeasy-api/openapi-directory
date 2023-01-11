import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcemetadata as shared_resourcemetadata
from ..shared import virtualnodespec as shared_virtualnodespec
from ..shared import virtualnodestatus as shared_virtualnodestatus


@dataclass_json
@dataclasses.dataclass
class VirtualNodeData:
    r"""VirtualNodeData
    An object representing a virtual node returned by a describe operation.
    """
    
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    virtual_node_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNodeName') }})
    metadata: Optional[shared_resourcemetadata.ResourceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[shared_virtualnodespec.VirtualNodeSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[shared_virtualnodestatus.VirtualNodeStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
