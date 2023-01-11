import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portrange as shared_portrange


@dataclass_json
@dataclasses.dataclass
class UpdateCustomRoutingListenerRequest:
    listener_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerArn') }})
    port_ranges: list[shared_portrange.PortRange] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    
