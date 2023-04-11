import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the route.
 */
export declare enum DeleteTransitGatewayRouteResultRouteStateEnum {
    Pending = "pending",
    Active = "active",
    Blackhole = "blackhole",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum DeleteTransitGatewayRouteResultRouteTransitGatewayAttachmentsResourceTypeEnum {
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
export declare class DeleteTransitGatewayRouteResultRouteTransitGatewayAttachments extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: DeleteTransitGatewayRouteResultRouteTransitGatewayAttachmentsResourceTypeEnum;
    transitGatewayAttachmentId?: string;
}
/**
 * The route type.
 */
export declare enum DeleteTransitGatewayRouteResultRouteTypeEnum {
    Static = "static",
    Propagated = "propagated"
}
/**
 * Information about the route.
 */
export declare class DeleteTransitGatewayRouteResultRoute extends SpeakeasyBase {
    destinationCidrBlock?: string;
    prefixListId?: string;
    state?: DeleteTransitGatewayRouteResultRouteStateEnum;
    transitGatewayAttachments?: DeleteTransitGatewayRouteResultRouteTransitGatewayAttachments[];
    transitGatewayRouteTableAnnouncementId?: string;
    type?: DeleteTransitGatewayRouteResultRouteTypeEnum;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayRouteResult extends SpeakeasyBase {
    route?: DeleteTransitGatewayRouteResultRoute;
}
