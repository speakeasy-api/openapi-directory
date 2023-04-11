import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of resource, for example a VPC attachment.
 */
export declare enum AcceptTransitGatewayMulticastDomainAssociationsResultAssociationsResourceTypeEnum {
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
export declare enum AcceptTransitGatewayMulticastDomainAssociationsResultAssociationsSubnetsStateEnum {
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
export declare class AcceptTransitGatewayMulticastDomainAssociationsResultAssociationsSubnets extends SpeakeasyBase {
    state?: AcceptTransitGatewayMulticastDomainAssociationsResultAssociationsSubnetsStateEnum;
    subnetId?: string;
}
/**
 * Information about the multicast domain associations.
 */
export declare class AcceptTransitGatewayMulticastDomainAssociationsResultAssociations extends SpeakeasyBase {
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: AcceptTransitGatewayMulticastDomainAssociationsResultAssociationsResourceTypeEnum;
    subnets?: AcceptTransitGatewayMulticastDomainAssociationsResultAssociationsSubnets[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class AcceptTransitGatewayMulticastDomainAssociationsResult extends SpeakeasyBase {
    associations?: AcceptTransitGatewayMulticastDomainAssociationsResultAssociations;
}
