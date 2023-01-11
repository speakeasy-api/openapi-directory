import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
/** 
 * The VPC attachment options.
**/
export class ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applianceModeSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  dnsSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6Support?: Record<string, any>;
}


// ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
/** 
 * Information about the modified attachment.
**/
export class ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;

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


export class ModifyTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayVpcAttachment?: ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
