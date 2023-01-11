import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import route as shared_route


@dataclass_json
@dataclasses.dataclass
class NetworkFirewallBlackHoleRouteDetectedViolation:
    r"""NetworkFirewallBlackHoleRouteDetectedViolation
    Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.
    """
    
    route_table_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    violating_routes: Optional[list[shared_route.Route]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolatingRoutes') }})
    violation_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
