import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the accepter transit gateway.
 */
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * Describes whether dynamic routing is enabled or disabled for the transit gateway peering attachment.
 */
export declare enum CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptionsDynamicRoutingEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Details about the transit gateway peering attachment.
 */
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptions extends SpeakeasyBase {
    dynamicRouting?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptionsDynamicRoutingEnum;
}
/**
 * Information about the requester transit gateway.
 */
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStateEnum {
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
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The transit gateway peering attachment.
 */
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
    accepterTgwInfo?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
    accepterTransitGatewayAttachmentId?: string;
    creationTime?: Date;
    options?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptions;
    requesterTgwInfo?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
    state?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStateEnum;
    status?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
    tags?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentTags[];
    transitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
    transitGatewayPeeringAttachment?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
