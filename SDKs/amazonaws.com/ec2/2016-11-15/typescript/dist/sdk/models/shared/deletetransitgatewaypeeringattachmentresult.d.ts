import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the accepter transit gateway.
**/
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
    ownerId?: Record<string, any>;
    region?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
/**
 * Information about the requester transit gateway.
**/
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
    ownerId?: Record<string, any>;
    region?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
/**
 * The status of the transit gateway peering attachment.
**/
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * The transit gateway peering attachment.
**/
export declare class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
    accepterTgwInfo?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
    creationTime?: Record<string, any>;
    requesterTgwInfo?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
    state?: Record<string, any>;
    status?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
}
export declare class DeleteTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
    transitGatewayPeeringAttachment?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
