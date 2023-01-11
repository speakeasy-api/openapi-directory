import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import meshdata as shared_meshdata


@dataclass_json
@dataclasses.dataclass
class DeleteMeshOutput:
    r"""DeleteMeshOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    mesh: shared_meshdata.MeshData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mesh') }})
    
