import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway
/** 
 * Information about the egress-only internet gateway.
**/
export class CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachments?: Record<string, any>;

  @SpeakeasyMetadata()
  egressOnlyInternetGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class CreateEgressOnlyInternetGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  egressOnlyInternetGateway?: CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway;
}
