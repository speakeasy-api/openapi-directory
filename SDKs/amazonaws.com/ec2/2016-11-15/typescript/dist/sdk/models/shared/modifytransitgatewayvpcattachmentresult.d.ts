import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether appliance mode support is enabled.
 */
export declare enum ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether IPv6 support is disabled.
 */
export declare enum ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The VPC attachment options.
 */
export declare class ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum;
    dnsSupport?: ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum;
    ipv6Support?: ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum;
}
/**
 * The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum {
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
export declare class ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the modified attachment.
 */
export declare class ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
    creationTime?: Date;
    options?: ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
    state?: ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum;
    subnetIds?: string[];
    tags?: ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    vpcId?: string;
    vpcOwnerId?: string;
}
/**
 * Success
 */
export declare class ModifyTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
    transitGatewayVpcAttachment?: ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
