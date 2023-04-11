import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether appliance mode support is enabled.
 */
export declare enum AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether IPv6 support is disabled.
 */
export declare enum AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The VPC attachment options.
 */
export declare class AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsApplianceModeSupportEnum;
    dnsSupport?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsDnsSupportEnum;
    ipv6Support?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptionsIpv6SupportEnum;
}
/**
 * The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum {
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
export declare class AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The VPC attachment.
 */
export declare class AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
    creationTime?: Date;
    options?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
    state?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentStateEnum;
    subnetIds?: string[];
    tags?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    vpcId?: string;
    vpcOwnerId?: string;
}
/**
 * Success
 */
export declare class AcceptTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
    transitGatewayVpcAttachment?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
