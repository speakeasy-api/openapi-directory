import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the association.
 */
export declare enum DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsAssociationStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * The association.
 */
export declare class DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsAssociation extends SpeakeasyBase {
    state?: DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsAssociationStateEnum;
    transitGatewayRouteTableId?: string;
}
/**
 * The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.
 */
export declare enum DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsResourceTypeEnum {
    Vpc = "vpc",
    Vpn = "vpn",
    DirectConnectGateway = "direct-connect-gateway",
    Connect = "connect",
    Peering = "peering",
    TgwPeering = "tgw-peering"
}
/**
 * The attachment state. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsStateEnum {
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
export declare class DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an attachment between a resource and a transit gateway.
 */
export declare class DescribeTransitGatewayAttachmentsResultTransitGatewayAttachments extends SpeakeasyBase {
    association?: DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsAssociation;
    creationTime?: Date;
    resourceId?: string;
    resourceOwnerId?: string;
    resourceType?: DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsResourceTypeEnum;
    state?: DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsStateEnum;
    tags?: DescribeTransitGatewayAttachmentsResultTransitGatewayAttachmentsTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    transitGatewayOwnerId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewayAttachmentsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayAttachments?: DescribeTransitGatewayAttachmentsResultTransitGatewayAttachments[];
}
