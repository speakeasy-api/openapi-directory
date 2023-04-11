import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the route.
 */
export declare enum SearchLocalGatewayRoutesResultRoutesStateEnum {
    Pending = "pending",
    Active = "active",
    Blackhole = "blackhole",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The route type.
 */
export declare enum SearchLocalGatewayRoutesResultRoutesTypeEnum {
    Static = "static",
    Propagated = "propagated"
}
/**
 * Describes a route for a local gateway route table.
 */
export declare class SearchLocalGatewayRoutesResultRoutes extends SpeakeasyBase {
    coipPoolId?: string;
    destinationCidrBlock?: string;
    destinationPrefixListId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    networkInterfaceId?: string;
    ownerId?: string;
    state?: SearchLocalGatewayRoutesResultRoutesStateEnum;
    subnetId?: string;
    type?: SearchLocalGatewayRoutesResultRoutesTypeEnum;
}
/**
 * Success
 */
export declare class SearchLocalGatewayRoutesResult extends SpeakeasyBase {
    nextToken?: string;
    routes?: SearchLocalGatewayRoutesResultRoutes[];
}
