import { SpeakeasyBase } from "../../../internal/utils";
import { ExpectedRoute } from "./expectedroute";
import { Route } from "./route";
/**
 * Violation detail for the subnet for which internet traffic that hasn't been inspected.
 */
export declare class NetworkFirewallInternetTrafficNotInspectedViolation extends SpeakeasyBase {
    actualFirewallSubnetRoutes?: Route[];
    actualInternetGatewayRoutes?: Route[];
    currentFirewallSubnetRouteTable?: string;
    currentInternetGatewayRouteTable?: string;
    expectedFirewallEndpoint?: string;
    expectedFirewallSubnetRoutes?: ExpectedRoute[];
    expectedInternetGatewayRoutes?: ExpectedRoute[];
    firewallSubnetId?: string;
    internetGatewayId?: string;
    isRouteTableUsedInDifferentAZ?: boolean;
    routeTableId?: string;
    subnetAvailabilityZone?: string;
    subnetId?: string;
    violatingRoutes?: Route[];
    vpcId?: string;
}
