import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.
 */
export declare enum DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsOptionsAutoAcceptSharedAssociationsEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.
 */
export declare enum DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsOptionsIgmpv2SupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether support for statically configuring transit gateway multicast group sources is turned on.
 */
export declare enum DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsOptionsStaticSourcesSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The options for the transit gateway multicast domain.
 */
export declare class DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsOptions extends SpeakeasyBase {
    autoAcceptSharedAssociations?: DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsOptionsAutoAcceptSharedAssociationsEnum;
    igmpv2Support?: DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsOptionsIgmpv2SupportEnum;
    staticSourcesSupport?: DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsOptionsStaticSourcesSupportEnum;
}
/**
 * The state of the transit gateway multicast domain.
 */
export declare enum DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes the transit gateway multicast domain.
 */
export declare class DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomains extends SpeakeasyBase {
    creationTime?: Date;
    options?: DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsOptions;
    ownerId?: string;
    state?: DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsStateEnum;
    tags?: DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomainsTags[];
    transitGatewayId?: string;
    transitGatewayMulticastDomainArn?: string;
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewayMulticastDomainsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayMulticastDomains?: DescribeTransitGatewayMulticastDomainsResultTransitGatewayMulticastDomains[];
}
