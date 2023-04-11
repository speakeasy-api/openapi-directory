import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the accepter transit gateway.
 */
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * Describes whether dynamic routing is enabled or disabled for the transit gateway peering attachment.
 */
export declare enum RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptionsDynamicRoutingEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Details about the transit gateway peering attachment.
 */
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptions extends SpeakeasyBase {
    dynamicRouting?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptionsDynamicRoutingEnum;
}
/**
 * Information about the requester transit gateway.
 */
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStateEnum {
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
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The transit gateway peering attachment.
 */
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
    accepterTgwInfo?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
    accepterTransitGatewayAttachmentId?: string;
    creationTime?: Date;
    options?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptions;
    requesterTgwInfo?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
    state?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStateEnum;
    status?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
    tags?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentTags[];
    transitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class RejectTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
    transitGatewayPeeringAttachment?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
