import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource type for the transit gateway policy table association.
 */
export declare enum AssociateTransitGatewayPolicyTableResultAssociationResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * The state of the transit gateway policy table association.
 */
export declare enum AssociateTransitGatewayPolicyTableResultAssociationStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * Describes the association of a transit gateway and a transit gateway policy table.
 */
export declare class AssociateTransitGatewayPolicyTableResultAssociation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: AssociateTransitGatewayPolicyTableResultAssociationResourceTypeEnum;
    state?: AssociateTransitGatewayPolicyTableResultAssociationStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayPolicyTableId?: string;
}
/**
 * Success
 */
export declare class AssociateTransitGatewayPolicyTableResult extends SpeakeasyBase {
    association?: AssociateTransitGatewayPolicyTableResultAssociation;
}
