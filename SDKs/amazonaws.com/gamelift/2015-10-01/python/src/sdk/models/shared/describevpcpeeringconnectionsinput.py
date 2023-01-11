import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeVpcPeeringConnectionsInput:
    r"""DescribeVpcPeeringConnectionsInput
    Represents the input for a request operation.
    """
    
    fleet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    
