import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import route as shared_route


@dataclass_json
@dataclasses.dataclass
class NetworkFirewallUnexpectedFirewallRoutesViolation:
    r"""NetworkFirewallUnexpectedFirewallRoutesViolation
    Violation detail for an unexpected route that's present in a route table.
    """
    
    firewall_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallEndpoint') }})
    firewall_subnet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallSubnetId') }})
    route_table_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    violating_routes: Optional[list[shared_route.Route]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolatingRoutes') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
