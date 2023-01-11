import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the accepter transit gateway.
**/
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
    ownerId?: Record<string, any>;
    region?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
/**
 * Information about the requester transit gateway.
**/
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
    ownerId?: Record<string, any>;
    region?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
/**
 * The status of the transit gateway peering attachment.
**/
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * The transit gateway peering attachment.
**/
export declare class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
    accepterTgwInfo?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
    creationTime?: Record<string, any>;
    requesterTgwInfo?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
    state?: Record<string, any>;
    status?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
}
export declare class CreateTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
    transitGatewayPeeringAttachment?: CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
