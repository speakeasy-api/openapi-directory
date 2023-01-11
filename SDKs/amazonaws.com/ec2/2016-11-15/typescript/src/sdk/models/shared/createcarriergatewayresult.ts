import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateCarrierGatewayResultCarrierGateway
/** 
 * Information about the carrier gateway.
**/
export class CreateCarrierGatewayResultCarrierGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carrierGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


export class CreateCarrierGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carrierGateway?: CreateCarrierGatewayResultCarrierGateway;
}
