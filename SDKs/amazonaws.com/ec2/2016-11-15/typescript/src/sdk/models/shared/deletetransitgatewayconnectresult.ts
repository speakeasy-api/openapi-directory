import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTransitGatewayConnectResultTransitGatewayConnectOptions
/** 
 * The Connect attachment options.
**/
export class DeleteTransitGatewayConnectResultTransitGatewayConnectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  protocol?: Record<string, any>;
}


// DeleteTransitGatewayConnectResultTransitGatewayConnect
/** 
 * Information about the deleted Connect attachment.
**/
export class DeleteTransitGatewayConnectResultTransitGatewayConnect extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: DeleteTransitGatewayConnectResultTransitGatewayConnectOptions;

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


export class DeleteTransitGatewayConnectResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayConnect?: DeleteTransitGatewayConnectResultTransitGatewayConnect;
}
