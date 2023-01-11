import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the accepter transit gateway.
**/
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
    ownerId?: Record<string, any>;
    region?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
/**
 * Information about the requester transit gateway.
**/
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
    ownerId?: Record<string, any>;
    region?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
/**
 * The status of the transit gateway peering attachment.
**/
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * The transit gateway peering attachment.
**/
export declare class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
    accepterTgwInfo?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
    creationTime?: Record<string, any>;
    requesterTgwInfo?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
    state?: Record<string, any>;
    status?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
}
export declare class RejectTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
    transitGatewayPeeringAttachment?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
