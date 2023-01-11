import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portinfo as shared_portinfo


@dataclass_json
@dataclasses.dataclass
class OpenInstancePublicPortsRequest:
    instance_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    port_info: shared_portinfo.PortInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portInfo') }})
    
