import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether appliance mode support is enabled.
 */
export declare enum DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether IPv6 support is disabled.
 */
export declare enum DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The VPC attachment options.
 */
export declare class DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum;
    dnsSupport?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum;
    ipv6Support?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum;
}
/**
 * The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum {
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
export declare class DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the deleted VPC attachment.
 */
export declare class DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
    creationTime?: Date;
    options?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
    state?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum;
    subnetIds?: string[];
    tags?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    vpcId?: string;
    vpcOwnerId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
    transitGatewayVpcAttachment?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
