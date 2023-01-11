import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateCustomerGatewayResultCustomerGateway
/** 
 * Information about the customer gateway.
**/
export class CreateCustomerGatewayResultCustomerGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bgpAsn?: Record<string, any>;

  @SpeakeasyMetadata()
  certificateArn?: Record<string, any>;

  @SpeakeasyMetadata()
  customerGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  deviceName?: Record<string, any>;

  @SpeakeasyMetadata()
  ipAddress?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  type?: Record<string, any>;
}


// CreateCustomerGatewayResult
/** 
 * Contains the output of CreateCustomerGateway.
**/
export class CreateCustomerGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  customerGateway?: CreateCustomerGatewayResultCustomerGateway;
}
