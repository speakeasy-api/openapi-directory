import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the route.
 */
export declare enum CreateTransitGatewayRouteResultRouteStateEnum {
    Pending = "pending",
    Active = "active",
    Blackhole = "blackhole",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum CreateTransitGatewayRouteResultRouteTransitGatewayAttachmentsResourceTypeEnum {
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
export declare class CreateTransitGatewayRouteResultRouteTransitGatewayAttachments extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: CreateTransitGatewayRouteResultRouteTransitGatewayAttachmentsResourceTypeEnum;
    transitGatewayAttachmentId?: string;
}
/**
 * The route type.
 */
export declare enum CreateTransitGatewayRouteResultRouteTypeEnum {
    Static = "static",
    Propagated = "propagated"
}
/**
 * Information about the route.
 */
export declare class CreateTransitGatewayRouteResultRoute extends SpeakeasyBase {
    destinationCidrBlock?: string;
    prefixListId?: string;
    state?: CreateTransitGatewayRouteResultRouteStateEnum;
    transitGatewayAttachments?: CreateTransitGatewayRouteResultRouteTransitGatewayAttachments[];
    transitGatewayRouteTableAnnouncementId?: string;
    type?: CreateTransitGatewayRouteResultRouteTypeEnum;
}
/**
 * Success
 */
export declare class CreateTransitGatewayRouteResult extends SpeakeasyBase {
    route?: CreateTransitGatewayRouteResultRoute;
}
