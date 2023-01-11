import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateVpcPeeringAuthorizationInput:
    r"""CreateVpcPeeringAuthorizationInput
    Represents the input for a request operation.
    """
    
    game_lift_aws_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameLiftAwsAccountId') }})
    peer_vpc_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeerVpcId') }})
    
