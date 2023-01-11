import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locationstate as shared_locationstate


@dataclass_json
@dataclasses.dataclass
class CreateFleetLocationsOutput:
    r"""CreateFleetLocationsOutput
    Represents the returned data in response to a request operation. 
    """
    
    fleet_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    fleet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    location_states: Optional[list[shared_locationstate.LocationState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationStates') }})
    
