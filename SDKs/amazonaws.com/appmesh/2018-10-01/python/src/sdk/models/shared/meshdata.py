import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcemetadata as shared_resourcemetadata
from ..shared import meshstatus as shared_meshstatus


@dataclass_json
@dataclasses.dataclass
class MeshData:
    r"""MeshData
    An object representing a service mesh returned by a describe operation.
    """
    
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: shared_resourcemetadata.ResourceMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    status: Optional[shared_meshstatus.MeshStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
