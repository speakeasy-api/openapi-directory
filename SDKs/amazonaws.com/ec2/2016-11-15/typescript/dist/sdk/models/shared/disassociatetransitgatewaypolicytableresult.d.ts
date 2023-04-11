import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resource type for the transit gateway policy table association.
 */
export declare enum DisassociateTransitGatewayPolicyTableResultAssociationResourceTypeEnum {
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
export declare enum DisassociateTransitGatewayPolicyTableResultAssociationStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * Returns details about the transit gateway policy table disassociation.
 */
export declare class DisassociateTransitGatewayPolicyTableResultAssociation extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: DisassociateTransitGatewayPolicyTableResultAssociationResourceTypeEnum;
    state?: DisassociateTransitGatewayPolicyTableResultAssociationStateEnum;
    transitGatewayAttachmentId?: string;
    transitGatewayPolicyTableId?: string;
}
/**
 * Success
 */
export declare class DisassociateTransitGatewayPolicyTableResult extends SpeakeasyBase {
    association?: DisassociateTransitGatewayPolicyTableResultAssociation;
}
