import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum AssociateTransitGatewayRouteTableResultAssociationResourceTypeEnum {
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
export declare enum AssociateTransitGatewayRouteTableResultAssociationStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * The ID of the association.
 */
export declare class AssociateTransitGatewayRouteTableResultAssociation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: AssociateTransitGatewayRouteTableResultAssociationResourceTypeEnum;
    state?: AssociateTransitGatewayRouteTableResultAssociationStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class AssociateTransitGatewayRouteTableResult extends SpeakeasyBase {
    association?: AssociateTransitGatewayRouteTableResultAssociation;
}
