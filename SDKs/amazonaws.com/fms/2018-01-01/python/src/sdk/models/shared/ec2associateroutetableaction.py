import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontarget as shared_actiontarget


@dataclass_json
@dataclasses.dataclass
class Ec2AssociateRouteTableAction:
    r"""Ec2AssociateRouteTableAction
    The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.
    """
    
    route_table_id: shared_actiontarget.ActionTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    gateway_id: Optional[shared_actiontarget.ActionTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayId') }})
    subnet_id: Optional[shared_actiontarget.ActionTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    
