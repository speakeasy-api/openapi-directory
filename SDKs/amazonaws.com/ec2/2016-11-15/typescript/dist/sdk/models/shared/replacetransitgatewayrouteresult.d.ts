import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the route.
 */
export declare enum ReplaceTransitGatewayRouteResultRouteStateEnum {
    Pending = "pending",
    Active = "active",
    Blackhole = "blackhole",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum ReplaceTransitGatewayRouteResultRouteTransitGatewayAttachmentsResourceTypeEnum {
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
export declare class ReplaceTransitGatewayRouteResultRouteTransitGatewayAttachments extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: ReplaceTransitGatewayRouteResultRouteTransitGatewayAttachmentsResourceTypeEnum;
    transitGatewayAttachmentId?: string;
}
/**
 * The route type.
 */
export declare enum ReplaceTransitGatewayRouteResultRouteTypeEnum {
    Static = "static",
    Propagated = "propagated"
}
/**
 * Information about the modified route.
 */
export declare class ReplaceTransitGatewayRouteResultRoute extends SpeakeasyBase {
    destinationCidrBlock?: string;
    prefixListId?: string;
    state?: ReplaceTransitGatewayRouteResultRouteStateEnum;
    transitGatewayAttachments?: ReplaceTransitGatewayRouteResultRouteTransitGatewayAttachments[];
    transitGatewayRouteTableAnnouncementId?: string;
    type?: ReplaceTransitGatewayRouteResultRouteTypeEnum;
}
/**
 * Success
 */
export declare class ReplaceTransitGatewayRouteResult extends SpeakeasyBase {
    route?: ReplaceTransitGatewayRouteResultRoute;
}
