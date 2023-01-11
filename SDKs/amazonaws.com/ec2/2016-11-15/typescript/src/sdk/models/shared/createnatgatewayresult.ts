import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateNatGatewayResultNatGatewayProvisionedBandwidth
/** 
 * Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
**/
export class CreateNatGatewayResultNatGatewayProvisionedBandwidth extends SpeakeasyBase {
  @SpeakeasyMetadata()
  provisionTime?: Record<string, any>;

  @SpeakeasyMetadata()
  provisioned?: Record<string, any>;

  @SpeakeasyMetadata()
  requestTime?: Record<string, any>;

  @SpeakeasyMetadata()
  requested?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;
}


// CreateNatGatewayResultNatGateway
/** 
 * Information about the NAT gateway.
**/
export class CreateNatGatewayResultNatGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectivityType?: Record<string, any>;

  @SpeakeasyMetadata()
  createTime?: Record<string, any>;

  @SpeakeasyMetadata()
  deleteTime?: Record<string, any>;

  @SpeakeasyMetadata()
  failureCode?: Record<string, any>;

  @SpeakeasyMetadata()
  failureMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  natGatewayAddresses?: Record<string, any>;

  @SpeakeasyMetadata()
  natGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  provisionedBandwidth?: CreateNatGatewayResultNatGatewayProvisionedBandwidth;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


export class CreateNatGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  natGateway?: CreateNatGatewayResultNatGateway;
}
