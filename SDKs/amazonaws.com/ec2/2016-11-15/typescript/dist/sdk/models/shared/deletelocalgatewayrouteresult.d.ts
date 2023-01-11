import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the route.
**/
export declare class DeleteLocalGatewayRouteResultRoute extends SpeakeasyBase {
    destinationCidrBlock?: Record<string, any>;
    localGatewayRouteTableArn?: Record<string, any>;
    localGatewayRouteTableId?: Record<string, any>;
    localGatewayVirtualInterfaceGroupId?: Record<string, any>;
    ownerId?: Record<string, any>;
    state?: Record<string, any>;
    type?: Record<string, any>;
}
export declare class DeleteLocalGatewayRouteResult extends SpeakeasyBase {
    route?: DeleteLocalGatewayRouteResultRoute;
}
