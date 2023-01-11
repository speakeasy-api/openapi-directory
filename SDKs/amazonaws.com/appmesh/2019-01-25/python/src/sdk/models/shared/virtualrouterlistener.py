import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portmapping as shared_portmapping


@dataclass_json
@dataclasses.dataclass
class VirtualRouterListener:
    r"""VirtualRouterListener
    An object that represents a virtual router listener.
    """
    
    port_mapping: shared_portmapping.PortMapping = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMapping') }})
    
