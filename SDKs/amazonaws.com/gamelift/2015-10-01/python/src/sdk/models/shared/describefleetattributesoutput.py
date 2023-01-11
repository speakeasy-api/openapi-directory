import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleetattributes as shared_fleetattributes


@dataclass_json
@dataclasses.dataclass
class DescribeFleetAttributesOutput:
    r"""DescribeFleetAttributesOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_attributes: Optional[list[shared_fleetattributes.FleetAttributes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetAttributes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
