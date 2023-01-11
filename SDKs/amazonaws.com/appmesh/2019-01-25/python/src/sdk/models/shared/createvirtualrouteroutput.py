import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualrouterdata as shared_virtualrouterdata


@dataclass_json
@dataclasses.dataclass
class CreateVirtualRouterOutput:
    r"""CreateVirtualRouterOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    virtual_router: shared_virtualrouterdata.VirtualRouterData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouter') }})
    
