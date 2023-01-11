import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteCarrierGatewayResultCarrierGateway
/** 
 * Information about the carrier gateway.
**/
export class DeleteCarrierGatewayResultCarrierGateway extends SpeakeasyBase {
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


export class DeleteCarrierGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carrierGateway?: DeleteCarrierGatewayResultCarrierGateway;
}
