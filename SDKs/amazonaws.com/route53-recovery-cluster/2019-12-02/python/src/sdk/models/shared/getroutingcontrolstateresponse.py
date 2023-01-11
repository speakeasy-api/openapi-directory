import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routingcontrolstate_enum as shared_routingcontrolstate_enum


@dataclass_json
@dataclasses.dataclass
class GetRoutingControlStateResponse:
    routing_control_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingControlArn') }})
    routing_control_state: shared_routingcontrolstate_enum.RoutingControlStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingControlState') }})
    
