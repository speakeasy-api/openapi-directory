import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateLocalGatewayRouteResultRoute
/** 
 * Information about the route.
**/
export class CreateLocalGatewayRouteResultRoute extends SpeakeasyBase {
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


export class CreateLocalGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: CreateLocalGatewayRouteResultRoute;
}
