import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTransitGatewayRouteResultRoute
/** 
 * Information about the route.
**/
export class DeleteTransitGatewayRouteResultRoute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationCidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachments?: Record<string, any>;

  @SpeakeasyMetadata()
  type?: Record<string, any>;
}


export class DeleteTransitGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: DeleteTransitGatewayRouteResultRoute;
}
