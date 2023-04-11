import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of resource. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum GetTransitGatewayRouteTablePropagationsResultTransitGatewayRouteTablePropagationsResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * The state of the resource.
 */
export declare enum GetTransitGatewayRouteTablePropagationsResultTransitGatewayRouteTablePropagationsStateEnum {
    Enabling = "enabling",
    Enabled = "enabled",
    Disabling = "disabling",
    Disabled = "disabled"
}
/**
 * Describes a route table propagation.
 */
export declare class GetTransitGatewayRouteTablePropagationsResultTransitGatewayRouteTablePropagations extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: GetTransitGatewayRouteTablePropagationsResultTransitGatewayRouteTablePropagationsResourceTypeEnum;
    state?: GetTransitGatewayRouteTablePropagationsResultTransitGatewayRouteTablePropagationsStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableAnnouncementId?: string;
}
/**
 * Success
 */
export declare class GetTransitGatewayRouteTablePropagationsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayRouteTablePropagations?: GetTransitGatewayRouteTablePropagationsResultTransitGatewayRouteTablePropagations[];
}
