import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
/** 
 * The VPC attachment options.
**/
export class AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applianceModeSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  dnsSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6Support?: Record<string, any>;
}


// AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
/** 
 * The VPC attachment.
**/
export class AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;

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


export class AcceptTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayVpcAttachment?: AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}
