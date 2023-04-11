import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum DisassociateTransitGatewayRouteTableResultAssociationResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * The state of the association.
 */
export declare enum DisassociateTransitGatewayRouteTableResultAssociationStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * Information about the association.
 */
export declare class DisassociateTransitGatewayRouteTableResultAssociation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: DisassociateTransitGatewayRouteTableResultAssociationResourceTypeEnum;
    state?: DisassociateTransitGatewayRouteTableResultAssociationStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class DisassociateTransitGatewayRouteTableResult extends SpeakeasyBase {
    association?: DisassociateTransitGatewayRouteTableResultAssociation;
}
