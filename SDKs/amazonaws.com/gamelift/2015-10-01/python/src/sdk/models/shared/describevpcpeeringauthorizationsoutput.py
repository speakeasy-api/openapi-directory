import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vpcpeeringauthorization as shared_vpcpeeringauthorization


@dataclass_json
@dataclasses.dataclass
class DescribeVpcPeeringAuthorizationsOutput:
    vpc_peering_authorizations: Optional[list[shared_vpcpeeringauthorization.VpcPeeringAuthorization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcPeeringAuthorizations') }})
    
