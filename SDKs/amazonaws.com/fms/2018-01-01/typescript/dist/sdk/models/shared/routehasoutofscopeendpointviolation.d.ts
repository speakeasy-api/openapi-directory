import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
/**
 * Contains details about the route endpoint that violates the policy scope.
 */
export declare class RouteHasOutOfScopeEndpointViolation extends SpeakeasyBase {
    currentFirewallSubnetRouteTable?: string;
    currentInternetGatewayRouteTable?: string;
    firewallSubnetId?: string;
    firewallSubnetRoutes?: Route[];
    internetGatewayId?: string;
    internetGatewayRoutes?: Route[];
    routeTableId?: string;
    subnetAvailabilityZone?: string;
    subnetAvailabilityZoneId?: string;
    subnetId?: string;
    violatingRoutes?: Route[];
    vpcId?: string;
}
