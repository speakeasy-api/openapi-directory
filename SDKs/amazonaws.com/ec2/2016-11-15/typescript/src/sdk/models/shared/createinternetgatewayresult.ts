import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateInternetGatewayResultInternetGateway
/** 
 * Information about the internet gateway.
**/
export class CreateInternetGatewayResultInternetGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachments?: Record<string, any>;

  @SpeakeasyMetadata()
  internetGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class CreateInternetGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  internetGateway?: CreateInternetGatewayResultInternetGateway;
}
