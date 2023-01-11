import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
/** 
 * Information about the accepter transit gateway.
**/
export class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;
}


// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
/** 
 * Information about the requester transit gateway.
**/
export class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;
}


// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
/** 
 * The status of the transit gateway peering attachment.
**/
export class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
/** 
 * The transit gateway peering attachment.
**/
export class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepterTgwInfo?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;

  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  requesterTgwInfo?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;
}


export class RejectTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayPeeringAttachment?: RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
