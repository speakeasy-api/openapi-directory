import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.
 */
export declare enum CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsAutoAcceptSharedAssociationsEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.
 */
export declare enum CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsIgmpv2SupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether support for statically configuring transit gateway multicast group sources is turned on.
 */
export declare enum CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsStaticSourcesSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The options for the transit gateway multicast domain.
 */
export declare class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions extends SpeakeasyBase {
    autoAcceptSharedAssociations?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsAutoAcceptSharedAssociationsEnum;
    igmpv2Support?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsIgmpv2SupportEnum;
    staticSourcesSupport?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsStaticSourcesSupportEnum;
}
/**
 * The state of the transit gateway multicast domain.
 */
export declare enum CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the transit gateway multicast domain.
 */
export declare class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain extends SpeakeasyBase {
    creationTime?: Date;
    options?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;
    ownerId?: string;
    state?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainStateEnum;
    tags?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainTags[];
    transitGatewayId?: string;
    transitGatewayMulticastDomainArn?: string;
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
    transitGatewayMulticastDomain?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
}
