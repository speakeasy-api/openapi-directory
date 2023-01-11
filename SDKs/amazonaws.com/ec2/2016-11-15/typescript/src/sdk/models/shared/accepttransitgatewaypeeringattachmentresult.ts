import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
/** 
 * Information about the accepter transit gateway.
**/
export class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;
}


// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
/** 
 * Information about the requester transit gateway.
**/
export class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;
}


// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
/** 
 * The status of the transit gateway peering attachment.
**/
export class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
/** 
 * The transit gateway peering attachment.
**/
export class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepterTgwInfo?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;

  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  requesterTgwInfo?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;
}


export class AcceptTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayPeeringAttachment?: AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
