import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routingcontrol as shared_routingcontrol


@dataclass_json
@dataclasses.dataclass
class UpdateRoutingControlResponse:
    routing_control: Optional[shared_routingcontrol.RoutingControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingControl') }})
    
