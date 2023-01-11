import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import healthcheckpolicy as shared_healthcheckpolicy
from ..shared import portmapping as shared_portmapping


@dataclass_json
@dataclasses.dataclass
class Listener:
    r"""Listener
    An object representing a listener for a virtual node.
    """
    
    health_check: Optional[shared_healthcheckpolicy.HealthCheckPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    port_mapping: Optional[shared_portmapping.PortMapping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMapping') }})
    
