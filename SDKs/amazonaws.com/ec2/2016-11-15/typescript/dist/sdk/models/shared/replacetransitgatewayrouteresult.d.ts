import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the modified route.
**/
export declare class ReplaceTransitGatewayRouteResultRoute extends SpeakeasyBase {
    destinationCidrBlock?: Record<string, any>;
    prefixListId?: Record<string, any>;
    state?: Record<string, any>;
    transitGatewayAttachments?: Record<string, any>;
    type?: Record<string, any>;
}
export declare class ReplaceTransitGatewayRouteResult extends SpeakeasyBase {
    route?: ReplaceTransitGatewayRouteResultRoute;
}
