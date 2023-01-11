import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import meshdata as shared_meshdata


@dataclass_json
@dataclasses.dataclass
class CreateMeshOutput:
    mesh: Optional[shared_meshdata.MeshData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mesh') }})
    
