import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of resource, for example a VPC attachment.
 */
export declare enum GetTransitGatewayMulticastDomainAssociationsResultMulticastDomainAssociationsResourceTypeEnum {
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
export declare enum GetTransitGatewayMulticastDomainAssociationsResultMulticastDomainAssociationsSubnetStateEnum {
    PendingAcceptance = "pendingAcceptance",
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated",
    Rejected = "rejected",
    Failed = "failed"
}
/**
 * The subnet associated with the transit gateway multicast domain.
 */
export declare class GetTransitGatewayMulticastDomainAssociationsResultMulticastDomainAssociationsSubnet extends SpeakeasyBase {
    state?: GetTransitGatewayMulticastDomainAssociationsResultMulticastDomainAssociationsSubnetStateEnum;
    subnetId?: string;
}
/**
 * Describes the resources associated with the transit gateway multicast domain.
 */
export declare class GetTransitGatewayMulticastDomainAssociationsResultMulticastDomainAssociations extends SpeakeasyBase {
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: GetTransitGatewayMulticastDomainAssociationsResultMulticastDomainAssociationsResourceTypeEnum;
    subnet?: GetTransitGatewayMulticastDomainAssociationsResultMulticastDomainAssociationsSubnet;
    transitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class GetTransitGatewayMulticastDomainAssociationsResult extends SpeakeasyBase {
    multicastDomainAssociations?: GetTransitGatewayMulticastDomainAssociationsResultMulticastDomainAssociations[];
    nextToken?: string;
}
