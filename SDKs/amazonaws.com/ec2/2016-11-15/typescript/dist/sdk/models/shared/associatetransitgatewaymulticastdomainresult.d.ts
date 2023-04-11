import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of resource, for example a VPC attachment.
 */
export declare enum AssociateTransitGatewayMulticastDomainResultAssociationsResourceTypeEnum {
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
export declare enum AssociateTransitGatewayMulticastDomainResultAssociationsSubnetsStateEnum {
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
export declare class AssociateTransitGatewayMulticastDomainResultAssociationsSubnets extends SpeakeasyBase {
    state?: AssociateTransitGatewayMulticastDomainResultAssociationsSubnetsStateEnum;
    subnetId?: string;
}
/**
 * Information about the transit gateway multicast domain associations.
 */
export declare class AssociateTransitGatewayMulticastDomainResultAssociations extends SpeakeasyBase {
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: AssociateTransitGatewayMulticastDomainResultAssociationsResourceTypeEnum;
    subnets?: AssociateTransitGatewayMulticastDomainResultAssociationsSubnets[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class AssociateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
    associations?: AssociateTransitGatewayMulticastDomainResultAssociations;
}
