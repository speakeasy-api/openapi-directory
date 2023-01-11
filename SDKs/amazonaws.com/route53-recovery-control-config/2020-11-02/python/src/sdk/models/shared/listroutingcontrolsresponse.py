import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routingcontrol as shared_routingcontrol


@dataclass_json
@dataclasses.dataclass
class ListRoutingControlsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    routing_controls: Optional[list[shared_routingcontrol.RoutingControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingControls') }})
    
