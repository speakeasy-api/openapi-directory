import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateroutingcontrolstateentry as shared_updateroutingcontrolstateentry


@dataclass_json
@dataclasses.dataclass
class UpdateRoutingControlStatesRequest:
    update_routing_control_state_entries: list[shared_updateroutingcontrolstateentry.UpdateRoutingControlStateEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateRoutingControlStateEntries') }})
    
