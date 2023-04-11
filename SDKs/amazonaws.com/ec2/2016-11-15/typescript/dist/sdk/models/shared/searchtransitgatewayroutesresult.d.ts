import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the route.
 */
export declare enum SearchTransitGatewayRoutesResultRoutesStateEnum {
    Pending = "pending",
    Active = "active",
    Blackhole = "blackhole",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum SearchTransitGatewayRoutesResultRoutesTransitGatewayAttachmentsResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * Describes a route attachment.
 */
export declare class SearchTransitGatewayRoutesResultRoutesTransitGatewayAttachments extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: SearchTransitGatewayRoutesResultRoutesTransitGatewayAttachmentsResourceTypeEnum;
    transitGatewayAttachmentId?: string;
}
/**
 * The route type.
 */
export declare enum SearchTransitGatewayRoutesResultRoutesTypeEnum {
    Static = "static",
    Propagated = "propagated"
}
/**
 * Describes a route for a transit gateway route table.
 */
export declare class SearchTransitGatewayRoutesResultRoutes extends SpeakeasyBase {
    destinationCidrBlock?: string;
    prefixListId?: string;
    state?: SearchTransitGatewayRoutesResultRoutesStateEnum;
    transitGatewayAttachments?: SearchTransitGatewayRoutesResultRoutesTransitGatewayAttachments[];
    transitGatewayRouteTableAnnouncementId?: string;
    type?: SearchTransitGatewayRoutesResultRoutesTypeEnum;
}
/**
 * Success
 */
export declare class SearchTransitGatewayRoutesResult extends SpeakeasyBase {
    additionalRoutesAvailable?: boolean;
    routes?: SearchTransitGatewayRoutesResultRoutes[];
}
