import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ec2associateroutetableaction as shared_ec2associateroutetableaction
from ..shared import ec2copyroutetableaction as shared_ec2copyroutetableaction
from ..shared import ec2createrouteaction as shared_ec2createrouteaction
from ..shared import ec2createroutetableaction as shared_ec2createroutetableaction
from ..shared import ec2deleterouteaction as shared_ec2deleterouteaction
from ..shared import ec2replacerouteaction as shared_ec2replacerouteaction
from ..shared import ec2replaceroutetableassociationaction as shared_ec2replaceroutetableassociationaction


@dataclass_json
@dataclasses.dataclass
class RemediationAction:
    r"""RemediationAction
    Information about an individual action you can take to remediate a violation.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    ec2_associate_route_table_action: Optional[shared_ec2associateroutetableaction.Ec2AssociateRouteTableAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2AssociateRouteTableAction') }})
    ec2_copy_route_table_action: Optional[shared_ec2copyroutetableaction.Ec2CopyRouteTableAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2CopyRouteTableAction') }})
    ec2_create_route_action: Optional[shared_ec2createrouteaction.Ec2CreateRouteAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2CreateRouteAction') }})
    ec2_create_route_table_action: Optional[shared_ec2createroutetableaction.Ec2CreateRouteTableAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2CreateRouteTableAction') }})
    ec2_delete_route_action: Optional[shared_ec2deleterouteaction.Ec2DeleteRouteAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2DeleteRouteAction') }})
    ec2_replace_route_action: Optional[shared_ec2replacerouteaction.Ec2ReplaceRouteAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2ReplaceRouteAction') }})
    ec2_replace_route_table_association_action: Optional[shared_ec2replaceroutetableassociationaction.Ec2ReplaceRouteTableAssociationAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2ReplaceRouteTableAssociationAction') }})
    
