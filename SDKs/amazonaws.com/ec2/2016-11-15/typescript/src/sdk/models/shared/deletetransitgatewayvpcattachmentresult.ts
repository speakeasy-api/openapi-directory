import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
/** 
 * The VPC attachment options.
**/
export class DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applianceModeSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  dnsSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6Support?: Record<string, any>;
}


// DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
/** 
 * Information about the deleted VPC attachment.
**/
export class DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;

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


export class DeleteTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayVpcAttachment?: DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
