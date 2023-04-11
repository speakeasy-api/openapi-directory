import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum DisableTransitGatewayRouteTablePropagationResultPropagationResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * The state.
 */
export declare enum DisableTransitGatewayRouteTablePropagationResultPropagationStateEnum {
    Enabling = "enabling",
    Enabled = "enabled",
    Disabling = "disabling",
    Disabled = "disabled"
}
/**
 * Information about route propagation.
 */
export declare class DisableTransitGatewayRouteTablePropagationResultPropagation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: DisableTransitGatewayRouteTablePropagationResultPropagationResourceTypeEnum;
    state?: DisableTransitGatewayRouteTablePropagationResultPropagationStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableAnnouncementId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class DisableTransitGatewayRouteTablePropagationResult extends SpeakeasyBase {
    propagation?: DisableTransitGatewayRouteTablePropagationResultPropagation;
}
