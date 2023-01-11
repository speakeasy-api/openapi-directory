import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portmapping as shared_portmapping


@dataclass_json
@dataclasses.dataclass
class ListCustomRoutingPortMappingsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    port_mappings: Optional[list[shared_portmapping.PortMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortMappings') }})
    
