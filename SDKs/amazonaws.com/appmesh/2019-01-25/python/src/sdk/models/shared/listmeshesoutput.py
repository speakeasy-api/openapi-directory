import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import meshref as shared_meshref


@dataclass_json
@dataclasses.dataclass
class ListMeshesOutput:
    r"""ListMeshesOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    meshes: list[shared_meshref.MeshRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
