import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplaceTransitGatewayRouteResultRoute
/** 
 * Information about the modified route.
**/
export class ReplaceTransitGatewayRouteResultRoute extends SpeakeasyBase {
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


export class ReplaceTransitGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: ReplaceTransitGatewayRouteResultRoute;
}
