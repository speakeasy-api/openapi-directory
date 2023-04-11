import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether appliance mode support is enabled.
 */
export declare enum CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether IPv6 support is disabled.
 */
export declare enum CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The VPC attachment options.
 */
export declare class CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum;
    dnsSupport?: CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum;
    ipv6Support?: CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum;
}
/**
 * The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum {
    Initiating = "initiating",
    InitiatingRequest = "initiatingRequest",
    PendingAcceptance = "pendingAcceptance",
    RollingBack = "rollingBack",
    Pending = "pending",
    Available = "available",
    Modifying = "modifying",
    Deleting = "deleting",
    Deleted = "deleted",
    Failed = "failed",
    Rejected = "rejected",
    Rejecting = "rejecting",
    Failing = "failing"
}
/**
 * Describes a tag.
 */
export declare class CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the VPC attachment.
 */
export declare class CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
    creationTime?: Date;
    options?: CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
    state?: CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum;
    subnetIds?: string[];
    tags?: CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    vpcId?: string;
    vpcOwnerId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
    transitGatewayVpcAttachment?: CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
