import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The tunnel protocol.
 */
export declare enum CreateTransitGatewayConnectResultTransitGatewayConnectOptionsProtocolEnum {
    Gre = "gre"
}
/**
 * The Connect attachment options.
 */
export declare class CreateTransitGatewayConnectResultTransitGatewayConnectOptions extends SpeakeasyBase {
    protocol?: CreateTransitGatewayConnectResultTransitGatewayConnectOptionsProtocolEnum;
}
/**
 * The state of the attachment.
 */
export declare enum CreateTransitGatewayConnectResultTransitGatewayConnectStateEnum {
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
export declare class CreateTransitGatewayConnectResultTransitGatewayConnectTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the Connect attachment.
 */
export declare class CreateTransitGatewayConnectResultTransitGatewayConnect extends SpeakeasyBase {
    creationTime?: Date;
    options?: CreateTransitGatewayConnectResultTransitGatewayConnectOptions;
    state?: CreateTransitGatewayConnectResultTransitGatewayConnectStateEnum;
    tags?: CreateTransitGatewayConnectResultTransitGatewayConnectTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayId?: string;
    transportTransitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayConnectResult extends SpeakeasyBase {
    transitGatewayConnect?: CreateTransitGatewayConnectResultTransitGatewayConnect;
}
