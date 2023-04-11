import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether appliance mode support is enabled.
 */
export declare enum RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether IPv6 support is disabled.
 */
export declare enum RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The VPC attachment options.
 */
export declare class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum;
    dnsSupport?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum;
    ipv6Support?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum;
}
/**
 * The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum {
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
export declare class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the attachment.
 */
export declare class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
    creationTime?: Date;
    options?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
    state?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum;
    subnetIds?: string[];
    tags?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    vpcId?: string;
    vpcOwnerId?: string;
}
/**
 * Success
 */
export declare class RejectTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
    transitGatewayVpcAttachment?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
