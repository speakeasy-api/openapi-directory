import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteLocalGatewayRouteResultRoute
/** 
 * Information about the route.
**/
export class DeleteLocalGatewayRouteResultRoute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationCidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  localGatewayRouteTableArn?: Record<string, any>;

  @SpeakeasyMetadata()
  localGatewayRouteTableId?: Record<string, any>;

  @SpeakeasyMetadata()
  localGatewayVirtualInterfaceGroupId?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  type?: Record<string, any>;
}


export class DeleteLocalGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: DeleteLocalGatewayRouteResultRoute;
}
