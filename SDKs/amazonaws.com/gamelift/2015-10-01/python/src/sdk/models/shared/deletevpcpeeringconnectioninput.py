import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteVpcPeeringConnectionInput:
    r"""DeleteVpcPeeringConnectionInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    vpc_peering_connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcPeeringConnectionId') }})
    
