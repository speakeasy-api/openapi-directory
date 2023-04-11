import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether appliance mode support is enabled.
 */
export declare enum DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsOptionsApplianceModeSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether IPv6 support is disabled.
 */
export declare enum DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsOptionsIpv6SupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The VPC attachment options.
 */
export declare class DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsOptions extends SpeakeasyBase {
    applianceModeSupport?: DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsOptionsApplianceModeSupportEnum;
    dnsSupport?: DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsOptionsDnsSupportEnum;
    ipv6Support?: DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsOptionsIpv6SupportEnum;
}
/**
 * The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsStateEnum {
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
export declare class DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a VPC attachment.
 */
export declare class DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachments extends SpeakeasyBase {
    creationTime?: Date;
    options?: DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsOptions;
    state?: DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsStateEnum;
    subnetIds?: string[];
    tags?: DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachmentsTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    vpcId?: string;
    vpcOwnerId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewayVpcAttachmentsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayVpcAttachments?: DescribeTransitGatewayVpcAttachmentsResultTransitGatewayVpcAttachments[];
}
