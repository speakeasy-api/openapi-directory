import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
/** 
 * Information about the accepter transit gateway.
**/
export class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;
}


// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
/** 
 * Information about the requester transit gateway.
**/
export class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;
}


// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
/** 
 * The status of the transit gateway peering attachment.
**/
export class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
/** 
 * The transit gateway peering attachment.
**/
export class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepterTgwInfo?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;

  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  requesterTgwInfo?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;
}


export class DeleteTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayPeeringAttachment?: DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}
