import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTransitGatewayConnectResultTransitGatewayConnectOptions
/** 
 * The Connect attachment options.
**/
export class CreateTransitGatewayConnectResultTransitGatewayConnectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  protocol?: Record<string, any>;
}


// CreateTransitGatewayConnectResultTransitGatewayConnect
/** 
 * Information about the Connect attachment.
**/
export class CreateTransitGatewayConnectResultTransitGatewayConnect extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: CreateTransitGatewayConnectResultTransitGatewayConnectOptions;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  transportTransitGatewayAttachmentId?: Record<string, any>;
}


export class CreateTransitGatewayConnectResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayConnect?: CreateTransitGatewayConnectResultTransitGatewayConnect;
}
