import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
/** 
 * The VPC attachment options.
**/
export class CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applianceModeSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  dnsSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6Support?: Record<string, any>;
}


// CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
/** 
 * Information about the VPC attachment.
**/
export class CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;

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


export class CreateTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayVpcAttachment?: CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
