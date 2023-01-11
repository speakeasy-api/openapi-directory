import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationportmapping as shared_destinationportmapping


@dataclass_json
@dataclasses.dataclass
class ListCustomRoutingPortMappingsByDestinationResponse:
    destination_port_mappings: Optional[list[shared_destinationportmapping.DestinationPortMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPortMappings') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
