import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachVpnGatewayResultVpcAttachment
/** 
 * Information about the attachment.
**/
export class AttachVpnGatewayResultVpcAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


// AttachVpnGatewayResult
/** 
 * Contains the output of AttachVpnGateway.
**/
export class AttachVpnGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpcAttachment?: AttachVpnGatewayResultVpcAttachment;
}
