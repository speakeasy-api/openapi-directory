import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of resource, for example a VPC attachment.
 */
export declare enum RejectTransitGatewayMulticastDomainAssociationsResultAssociationsResourceTypeEnum {
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
export declare enum RejectTransitGatewayMulticastDomainAssociationsResultAssociationsSubnetsStateEnum {
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
export declare class RejectTransitGatewayMulticastDomainAssociationsResultAssociationsSubnets extends SpeakeasyBase {
    state?: RejectTransitGatewayMulticastDomainAssociationsResultAssociationsSubnetsStateEnum;
    subnetId?: string;
}
/**
 * Information about the multicast domain associations.
 */
export declare class RejectTransitGatewayMulticastDomainAssociationsResultAssociations extends SpeakeasyBase {
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: RejectTransitGatewayMulticastDomainAssociationsResultAssociationsResourceTypeEnum;
    subnets?: RejectTransitGatewayMulticastDomainAssociationsResultAssociationsSubnets[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class RejectTransitGatewayMulticastDomainAssociationsResult extends SpeakeasyBase {
    associations?: RejectTransitGatewayMulticastDomainAssociationsResultAssociations;
}
