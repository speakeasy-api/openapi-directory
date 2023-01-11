import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleetattributes as shared_fleetattributes
from ..shared import locationstate as shared_locationstate


@dataclass_json
@dataclasses.dataclass
class CreateFleetOutput:
    r"""CreateFleetOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_attributes: Optional[shared_fleetattributes.FleetAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetAttributes') }})
    location_states: Optional[list[shared_locationstate.LocationState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationStates') }})
    
