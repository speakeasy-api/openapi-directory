import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The member type (for example, <code>static</code>).
 */
export declare enum SearchTransitGatewayMulticastGroupsResultMulticastGroupsMemberTypeEnum {
    Static = "static",
    Igmp = "igmp"
}
/**
 * The type of resource, for example a VPC attachment.
 */
export declare enum SearchTransitGatewayMulticastGroupsResultMulticastGroupsResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * The source type.
 */
export declare enum SearchTransitGatewayMulticastGroupsResultMulticastGroupsSourceTypeEnum {
    Static = "static",
    Igmp = "igmp"
}
/**
 * Describes the transit gateway multicast group resources.
 */
export declare class SearchTransitGatewayMulticastGroupsResultMulticastGroups extends SpeakeasyBase {
    groupIpAddress?: string;
    groupMember?: boolean;
    groupSource?: boolean;
    memberType?: SearchTransitGatewayMulticastGroupsResultMulticastGroupsMemberTypeEnum;
    networkInterfaceId?: string;
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: SearchTransitGatewayMulticastGroupsResultMulticastGroupsResourceTypeEnum;
    sourceType?: SearchTransitGatewayMulticastGroupsResultMulticastGroupsSourceTypeEnum;
    subnetId?: string;
    transitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class SearchTransitGatewayMulticastGroupsResult extends SpeakeasyBase {
    multicastGroups?: SearchTransitGatewayMulticastGroupsResultMulticastGroups[];
    nextToken?: string;
}
