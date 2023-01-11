import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleet as shared_fleet


@dataclass_json
@dataclasses.dataclass
class ListFleetsResponse:
    fleet_details: Optional[list[shared_fleet.Fleet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetDetails') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
