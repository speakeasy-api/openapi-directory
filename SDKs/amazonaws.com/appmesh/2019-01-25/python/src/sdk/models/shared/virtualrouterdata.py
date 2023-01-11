import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcemetadata as shared_resourcemetadata
from ..shared import virtualrouterspec as shared_virtualrouterspec
from ..shared import virtualrouterstatus as shared_virtualrouterstatus


@dataclass_json
@dataclasses.dataclass
class VirtualRouterData:
    r"""VirtualRouterData
    An object that represents a virtual router returned by a describe operation.
    """
    
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: shared_resourcemetadata.ResourceMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: shared_virtualrouterspec.VirtualRouterSpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: shared_virtualrouterstatus.VirtualRouterStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_router_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouterName') }})
    
