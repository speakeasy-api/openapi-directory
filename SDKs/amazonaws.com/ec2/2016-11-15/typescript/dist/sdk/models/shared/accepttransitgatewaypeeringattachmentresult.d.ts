import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the accepter transit gateway.
 */
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * Describes whether dynamic routing is enabled or disabled for the transit gateway peering attachment.
 */
export declare enum AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptionsDynamicRoutingEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Details about the transit gateway peering attachment.
 */
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptions extends SpeakeasyBase {
    dynamicRouting?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptionsDynamicRoutingEnum;
}
/**
 * Information about the requester transit gateway.
 */
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
    coreNetworkId?: string;
    ownerId?: string;
    region?: string;
    transitGatewayId?: string;
}
/**
 * The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.
 */
export declare enum AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStateEnum {
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
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The transit gateway peering attachment.
 */
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
    accepterTgwInfo?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
    accepterTransitGatewayAttachmentId?: string;
    creationTime?: Date;
    options?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentOptions;
    requesterTgwInfo?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
    state?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStateEnum;
    status?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
    tags?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentTags[];
    transitGatewayAttachmentId?: string;
}
/**
 * Success
 */
export declare class AcceptTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
    transitGatewayPeeringAttachment?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
