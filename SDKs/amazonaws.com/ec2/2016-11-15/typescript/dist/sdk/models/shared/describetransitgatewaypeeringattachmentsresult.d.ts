import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the accepter transit gateway.
 */
export declare class DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsAccepterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * Describes whether dynamic routing is enabled or disabled for the transit gateway peering attachment.
 */
export declare enum DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsOptionsDynamicRoutingEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Details about the transit gateway peering attachment.
 */
export declare class DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsOptions extends SpeakeasyBase {
    dynamicRouting?: DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsOptionsDynamicRoutingEnum;
}
/**
 * Information about the requester transit gateway.
 */
export declare class DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsRequesterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsStateEnum {
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
 * The status of the transit gateway peering attachment.
 */
export declare class DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsStatus extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes the transit gateway peering attachment.
 */
export declare class DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachments extends SpeakeasyBase {
    accepterTgwInfo?: DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsAccepterTgwInfo;
    accepterTransitGatewayAttachmentId?: string;
    creationTime?: Date;
    options?: DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsOptions;
    requesterTgwInfo?: DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsRequesterTgwInfo;
    state?: DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsStateEnum;
    status?: DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsStatus;
    tags?: DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachmentsTags[];
    transitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewayPeeringAttachmentsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayPeeringAttachments?: DescribeTransitGatewayPeeringAttachmentsResultTransitGatewayPeeringAttachments[];
}
