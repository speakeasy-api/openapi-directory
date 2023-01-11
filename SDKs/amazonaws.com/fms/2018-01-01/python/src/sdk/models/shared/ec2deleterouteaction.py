import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontarget as shared_actiontarget


@dataclass_json
@dataclasses.dataclass
class Ec2DeleteRouteAction:
    r"""Ec2DeleteRouteAction
    Information about the DeleteRoute action in Amazon EC2.
    """
    
    route_table_id: shared_actiontarget.ActionTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    destination_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCidrBlock') }})
    destination_ipv6_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationIpv6CidrBlock') }})
    destination_prefix_list_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPrefixListId') }})
    
