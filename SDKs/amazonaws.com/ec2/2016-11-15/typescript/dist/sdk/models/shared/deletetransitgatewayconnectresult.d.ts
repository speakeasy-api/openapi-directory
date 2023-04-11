import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The tunnel protocol.
 */
export declare enum DeleteTransitGatewayConnectResultTransitGatewayConnectOptionsProtocolEnum {
    Gre = "gre"
}
/**
 * The Connect attachment options.
 */
export declare class DeleteTransitGatewayConnectResultTransitGatewayConnectOptions extends SpeakeasyBase {
    protocol?: DeleteTransitGatewayConnectResultTransitGatewayConnectOptionsProtocolEnum;
}
/**
 * The state of the attachment.
 */
export declare enum DeleteTransitGatewayConnectResultTransitGatewayConnectStateEnum {
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
export declare class DeleteTransitGatewayConnectResultTransitGatewayConnectTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the deleted Connect attachment.
 */
export declare class DeleteTransitGatewayConnectResultTransitGatewayConnect extends SpeakeasyBase {
    creationTime?: Date;
    options?: DeleteTransitGatewayConnectResultTransitGatewayConnectOptions;
    state?: DeleteTransitGatewayConnectResultTransitGatewayConnectStateEnum;
    tags?: DeleteTransitGatewayConnectResultTransitGatewayConnectTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    transportTransitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayConnectResult extends SpeakeasyBase {
    transitGatewayConnect?: DeleteTransitGatewayConnectResultTransitGatewayConnect;
}
