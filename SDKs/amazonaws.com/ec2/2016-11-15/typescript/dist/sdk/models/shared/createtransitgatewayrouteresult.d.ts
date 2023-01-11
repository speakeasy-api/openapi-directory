import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the route.
**/
export declare class CreateTransitGatewayRouteResultRoute extends SpeakeasyBase {
    destinationCidrBlock?: Record<string, any>;
    prefixListId?: Record<string, any>;
    state?: Record<string, any>;
    transitGatewayAttachments?: Record<string, any>;
    type?: Record<string, any>;
}
export declare class CreateTransitGatewayRouteResult extends SpeakeasyBase {
    route?: CreateTransitGatewayRouteResultRoute;
}
