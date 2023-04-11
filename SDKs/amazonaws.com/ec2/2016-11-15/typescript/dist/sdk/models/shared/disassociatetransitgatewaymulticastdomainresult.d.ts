import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of resource, for example a VPC attachment.
 */
export declare enum DisassociateTransitGatewayMulticastDomainResultAssociationsResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * The state of the subnet association.
 */
export declare enum DisassociateTransitGatewayMulticastDomainResultAssociationsSubnetsStateEnum {
    PendingAcceptance = "pendingAcceptance",
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated",
    Rejected = "rejected",
    Failed = "failed"
}
/**
 * Describes the subnet association with the transit gateway multicast domain.
 */
export declare class DisassociateTransitGatewayMulticastDomainResultAssociationsSubnets extends SpeakeasyBase {
    state?: DisassociateTransitGatewayMulticastDomainResultAssociationsSubnetsStateEnum;
    subnetId?: string;
}
/**
 * Information about the association.
 */
export declare class DisassociateTransitGatewayMulticastDomainResultAssociations extends SpeakeasyBase {
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: DisassociateTransitGatewayMulticastDomainResultAssociationsResourceTypeEnum;
    subnets?: DisassociateTransitGatewayMulticastDomainResultAssociationsSubnets[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class DisassociateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
    associations?: DisassociateTransitGatewayMulticastDomainResultAssociations;
}
