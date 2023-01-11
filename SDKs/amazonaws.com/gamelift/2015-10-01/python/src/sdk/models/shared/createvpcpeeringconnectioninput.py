import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateVpcPeeringConnectionInput:
    r"""CreateVpcPeeringConnectionInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    peer_vpc_aws_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeerVpcAwsAccountId') }})
    peer_vpc_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeerVpcId') }})
    
