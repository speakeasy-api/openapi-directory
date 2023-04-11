import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum EnableTransitGatewayRouteTablePropagationResultPropagationResourceTypeEnum {
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
export declare enum EnableTransitGatewayRouteTablePropagationResultPropagationStateEnum {
    Enabling = "enabling",
    Enabled = "enabled",
    Disabling = "disabling",
    Disabled = "disabled"
}
/**
 * Information about route propagation.
 */
export declare class EnableTransitGatewayRouteTablePropagationResultPropagation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: EnableTransitGatewayRouteTablePropagationResultPropagationResourceTypeEnum;
    state?: EnableTransitGatewayRouteTablePropagationResultPropagationStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableAnnouncementId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class EnableTransitGatewayRouteTablePropagationResult extends SpeakeasyBase {
    propagation?: EnableTransitGatewayRouteTablePropagationResultPropagation;
}
