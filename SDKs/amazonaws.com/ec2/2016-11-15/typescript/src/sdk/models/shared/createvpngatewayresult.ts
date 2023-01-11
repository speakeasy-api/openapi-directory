import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVpnGatewayResultVpnGateway
/** 
 * Information about the virtual private gateway.
**/
export class CreateVpnGatewayResultVpnGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amazonSideAsn?: Record<string, any>;

  @SpeakeasyMetadata()
  availabilityZone?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  type?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcAttachments?: Record<string, any>;

  @SpeakeasyMetadata()
  vpnGatewayId?: Record<string, any>;
}


// CreateVpnGatewayResult
/** 
 * Contains the output of CreateVpnGateway.
**/
export class CreateVpnGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnGateway?: CreateVpnGatewayResultVpnGateway;
}
