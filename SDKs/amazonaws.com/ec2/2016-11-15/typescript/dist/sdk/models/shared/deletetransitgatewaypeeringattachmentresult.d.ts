import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the accepter transit gateway.
 */
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * Describes whether dynamic routing is enabled or disabled for the transit gateway peering attachment.
 */
export declare enum DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptionsDynamicRoutingEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Details about the transit gateway peering attachment.
 */
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptions extends SpeakeasyBase {
    dynamicRouting?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptionsDynamicRoutingEnum;
}
/**
 * Information about the requester transit gateway.
 */
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStateEnum {
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
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The transit gateway peering attachment.
 */
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
    accepterTgwInfo?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
    accepterTransitGatewayAttachmentId?: string;
    creationTime?: Date;
    options?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptions;
    requesterTgwInfo?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
    state?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStateEnum;
    status?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
    tags?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentTags[];
    transitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
    transitGatewayPeeringAttachment?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
