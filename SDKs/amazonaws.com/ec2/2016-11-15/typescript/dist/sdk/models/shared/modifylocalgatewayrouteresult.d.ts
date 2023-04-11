import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the route.
 */
export declare enum ModifyLocalGatewayRouteResultRouteStateEnum {
    Pending = "pending",
    Active = "active",
    Blackhole = "blackhole",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The route type.
 */
export declare enum ModifyLocalGatewayRouteResultRouteTypeEnum {
    Static = "static",
    Propagated = "propagated"
}
/**
 * Information about the local gateway route table.
 */
export declare class ModifyLocalGatewayRouteResultRoute extends SpeakeasyBase {
    coipPoolId?: string;
    destinationCidrBlock?: string;
    destinationPrefixListId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    networkInterfaceId?: string;
    ownerId?: string;
    state?: ModifyLocalGatewayRouteResultRouteStateEnum;
    subnetId?: string;
    type?: ModifyLocalGatewayRouteResultRouteTypeEnum;
}
/**
 * Success
 */
export declare class ModifyLocalGatewayRouteResult extends SpeakeasyBase {
    route?: ModifyLocalGatewayRouteResultRoute;
}
