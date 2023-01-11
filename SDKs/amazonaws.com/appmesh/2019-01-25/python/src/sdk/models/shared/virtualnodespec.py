import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backenddefaults as shared_backenddefaults
from ..shared import backend as shared_backend
from ..shared import listener as shared_listener
from ..shared import logging as shared_logging
from ..shared import servicediscovery as shared_servicediscovery


@dataclass_json
@dataclasses.dataclass
class VirtualNodeSpec:
    r"""VirtualNodeSpec
    An object that represents the specification of a virtual node.
    """
    
    backend_defaults: Optional[shared_backenddefaults.BackendDefaults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendDefaults') }})
    backends: Optional[list[shared_backend.Backend]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backends') }})
    listeners: Optional[list[shared_listener.Listener]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeners') }})
    logging: Optional[shared_logging.Logging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    service_discovery: Optional[shared_servicediscovery.ServiceDiscovery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDiscovery') }})
    
