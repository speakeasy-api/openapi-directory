import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTransitGatewayRouteResultRoute
/** 
 * Information about the route.
**/
export class CreateTransitGatewayRouteResultRoute extends SpeakeasyBase {
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


export class CreateTransitGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: CreateTransitGatewayRouteResultRoute;
}
