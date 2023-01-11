import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the accepter transit gateway.
**/
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
    ownerId?: Record<string, any>;
    region?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
/**
 * Information about the requester transit gateway.
**/
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
    ownerId?: Record<string, any>;
    region?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
/**
 * The status of the transit gateway peering attachment.
**/
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * The transit gateway peering attachment.
**/
export declare class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
    accepterTgwInfo?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
    creationTime?: Record<string, any>;
    requesterTgwInfo?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
    state?: Record<string, any>;
    status?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
}
export declare class AcceptTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
    transitGatewayPeeringAttachment?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
