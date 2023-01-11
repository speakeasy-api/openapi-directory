import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import route as shared_route
from ..shared import expectedroute as shared_expectedroute


@dataclass_json
@dataclasses.dataclass
class NetworkFirewallInvalidRouteConfigurationViolation:
    r"""NetworkFirewallInvalidRouteConfigurationViolation
    Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary.
    """
    
    actual_firewall_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActualFirewallEndpoint') }})
    actual_firewall_subnet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActualFirewallSubnetId') }})
    actual_firewall_subnet_routes: Optional[list[shared_route.Route]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActualFirewallSubnetRoutes') }})
    actual_internet_gateway_routes: Optional[list[shared_route.Route]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActualInternetGatewayRoutes') }})
    affected_subnets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AffectedSubnets') }})
    current_firewall_subnet_route_table: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentFirewallSubnetRouteTable') }})
    current_internet_gateway_route_table: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentInternetGatewayRouteTable') }})
    expected_firewall_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedFirewallEndpoint') }})
    expected_firewall_subnet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedFirewallSubnetId') }})
    expected_firewall_subnet_routes: Optional[list[shared_expectedroute.ExpectedRoute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedFirewallSubnetRoutes') }})
    expected_internet_gateway_routes: Optional[list[shared_expectedroute.ExpectedRoute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedInternetGatewayRoutes') }})
    internet_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InternetGatewayId') }})
    is_route_table_used_in_different_az: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsRouteTableUsedInDifferentAZ') }})
    route_table_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    violating_route: Optional[shared_route.Route] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolatingRoute') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
