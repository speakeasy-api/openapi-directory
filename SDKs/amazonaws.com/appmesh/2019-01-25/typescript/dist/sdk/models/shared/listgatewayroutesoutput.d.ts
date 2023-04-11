import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteRef } from "./gatewayrouteref";
/**
 * Success
 */
export declare class ListGatewayRoutesOutput extends SpeakeasyBase {
    gatewayRoutes: GatewayRouteRef[];
    nextToken?: string;
}
