import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the route.
 */
export declare enum CreateLocalGatewayRouteResultRouteStateEnum {
    Pending = "pending",
    Active = "active",
    Blackhole = "blackhole",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The route type.
 */
export declare enum CreateLocalGatewayRouteResultRouteTypeEnum {
    Static = "static",
    Propagated = "propagated"
}
/**
 * Information about the route.
 */
export declare class CreateLocalGatewayRouteResultRoute extends SpeakeasyBase {
    coipPoolId?: string;
    destinationCidrBlock?: string;
    destinationPrefixListId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    networkInterfaceId?: string;
    ownerId?: string;
    state?: CreateLocalGatewayRouteResultRouteStateEnum;
    subnetId?: string;
    type?: CreateLocalGatewayRouteResultRouteTypeEnum;
}
/**
 * Success
 */
export declare class CreateLocalGatewayRouteResult extends SpeakeasyBase {
    route?: CreateLocalGatewayRouteResultRoute;
}
