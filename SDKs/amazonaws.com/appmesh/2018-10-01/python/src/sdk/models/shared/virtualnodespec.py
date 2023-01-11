import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listener as shared_listener
from ..shared import servicediscovery as shared_servicediscovery


@dataclass_json
@dataclasses.dataclass
class VirtualNodeSpec:
    r"""VirtualNodeSpec
    An object representing the specification of a virtual node.
    """
    
    backends: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backends') }})
    listeners: Optional[list[shared_listener.Listener]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeners') }})
    service_discovery: Optional[shared_servicediscovery.ServiceDiscovery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDiscovery') }})
    
