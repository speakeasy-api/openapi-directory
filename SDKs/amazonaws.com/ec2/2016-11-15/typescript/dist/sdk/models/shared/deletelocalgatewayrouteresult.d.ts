import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the route.
 */
export declare enum DeleteLocalGatewayRouteResultRouteStateEnum {
    Pending = "pending",
    Active = "active",
    Blackhole = "blackhole",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The route type.
 */
export declare enum DeleteLocalGatewayRouteResultRouteTypeEnum {
    Static = "static",
    Propagated = "propagated"
}
/**
 * Information about the route.
 */
export declare class DeleteLocalGatewayRouteResultRoute extends SpeakeasyBase {
    coipPoolId?: string;
    destinationCidrBlock?: string;
    destinationPrefixListId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    networkInterfaceId?: string;
    ownerId?: string;
    state?: DeleteLocalGatewayRouteResultRouteStateEnum;
    subnetId?: string;
    type?: DeleteLocalGatewayRouteResultRouteTypeEnum;
}
/**
 * Success
 */
export declare class DeleteLocalGatewayRouteResult extends SpeakeasyBase {
    route?: DeleteLocalGatewayRouteResultRoute;
}
