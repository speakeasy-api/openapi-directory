import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleetutilization as shared_fleetutilization


@dataclass_json
@dataclasses.dataclass
class DescribeFleetLocationUtilizationOutput:
    r"""DescribeFleetLocationUtilizationOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_utilization: Optional[shared_fleetutilization.FleetUtilization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetUtilization') }})
    
