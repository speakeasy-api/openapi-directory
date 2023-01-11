import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleetutilization as shared_fleetutilization


@dataclass_json
@dataclasses.dataclass
class DescribeFleetUtilizationOutput:
    r"""DescribeFleetUtilizationOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_utilization: Optional[list[shared_fleetutilization.FleetUtilization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetUtilization') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
