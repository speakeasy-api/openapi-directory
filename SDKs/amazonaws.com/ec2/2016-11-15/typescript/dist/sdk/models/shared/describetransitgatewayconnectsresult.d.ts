import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The tunnel protocol.
 */
export declare enum DescribeTransitGatewayConnectsResultTransitGatewayConnectsOptionsProtocolEnum {
    Gre = "gre"
}
/**
 * The Connect attachment options.
 */
export declare class DescribeTransitGatewayConnectsResultTransitGatewayConnectsOptions extends SpeakeasyBase {
    protocol?: DescribeTransitGatewayConnectsResultTransitGatewayConnectsOptionsProtocolEnum;
}
/**
 * The state of the attachment.
 */
export declare enum DescribeTransitGatewayConnectsResultTransitGatewayConnectsStateEnum {
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
export declare class DescribeTransitGatewayConnectsResultTransitGatewayConnectsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a transit gateway Connect attachment.
 */
export declare class DescribeTransitGatewayConnectsResultTransitGatewayConnects extends SpeakeasyBase {
    creationTime?: Date;
    options?: DescribeTransitGatewayConnectsResultTransitGatewayConnectsOptions;
    state?: DescribeTransitGatewayConnectsResultTransitGatewayConnectsStateEnum;
    tags?: DescribeTransitGatewayConnectsResultTransitGatewayConnectsTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    transportTransitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewayConnectsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayConnects?: DescribeTransitGatewayConnectsResultTransitGatewayConnects[];
}
