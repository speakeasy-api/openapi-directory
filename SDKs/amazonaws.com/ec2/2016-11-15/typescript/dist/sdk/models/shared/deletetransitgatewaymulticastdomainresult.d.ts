import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.
 */
export declare enum DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsAutoAcceptSharedAssociationsEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.
 */
export declare enum DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsIgmpv2SupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether support for statically configuring transit gateway multicast group sources is turned on.
 */
export declare enum DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsStaticSourcesSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The options for the transit gateway multicast domain.
 */
export declare class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions extends SpeakeasyBase {
    autoAcceptSharedAssociations?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsAutoAcceptSharedAssociationsEnum;
    igmpv2Support?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsIgmpv2SupportEnum;
    staticSourcesSupport?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptionsStaticSourcesSupportEnum;
}
/**
 * The state of the transit gateway multicast domain.
 */
export declare enum DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the deleted transit gateway multicast domain.
 */
export declare class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain extends SpeakeasyBase {
    creationTime?: Date;
    options?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;
    ownerId?: string;
    state?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainStateEnum;
    tags?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainTags[];
    transitGatewayId?: string;
    transitGatewayMulticastDomainArn?: string;
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayMulticastDomainResult extends SpeakeasyBase {
    transitGatewayMulticastDomain?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
}
