import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
/** 
 * The VPC attachment options.
**/
export class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applianceModeSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  dnsSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6Support?: Record<string, any>;
}


// RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
/** 
 * Information about the attachment.
**/
export class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetIds?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcOwnerId?: Record<string, any>;
}


export class RejectTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayVpcAttachment?: RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
