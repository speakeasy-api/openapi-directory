import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleetcapacity as shared_fleetcapacity


@dataclass_json
@dataclasses.dataclass
class DescribeFleetCapacityOutput:
    r"""DescribeFleetCapacityOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_capacity: Optional[list[shared_fleetcapacity.FleetCapacity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetCapacity') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
