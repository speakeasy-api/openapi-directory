import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vpcpeeringconnection as shared_vpcpeeringconnection


@dataclass_json
@dataclasses.dataclass
class DescribeVpcPeeringConnectionsOutput:
    r"""DescribeVpcPeeringConnectionsOutput
    Represents the returned data in response to a request operation.
    """
    
    vpc_peering_connections: Optional[list[shared_vpcpeeringconnection.VpcPeeringConnection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcPeeringConnections') }})
    
