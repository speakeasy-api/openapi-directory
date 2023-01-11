import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcemetadata as shared_resourcemetadata
from ..shared import meshspec as shared_meshspec
from ..shared import meshstatus as shared_meshstatus


@dataclass_json
@dataclasses.dataclass
class MeshData:
    r"""MeshData
    An object that represents a service mesh returned by a describe operation.
    """
    
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: shared_resourcemetadata.ResourceMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: shared_meshspec.MeshSpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: shared_meshstatus.MeshStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
