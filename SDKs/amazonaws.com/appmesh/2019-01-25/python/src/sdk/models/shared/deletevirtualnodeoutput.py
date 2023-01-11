import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualnodedata as shared_virtualnodedata


@dataclass_json
@dataclasses.dataclass
class DeleteVirtualNodeOutput:
    r"""DeleteVirtualNodeOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    virtual_node: shared_virtualnodedata.VirtualNodeData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNode') }})
    
