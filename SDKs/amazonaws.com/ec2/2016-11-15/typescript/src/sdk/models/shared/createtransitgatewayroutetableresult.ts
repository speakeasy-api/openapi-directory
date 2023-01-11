import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTransitGatewayRouteTableResultTransitGatewayRouteTable
/** 
 * Information about the transit gateway route table.
**/
export class CreateTransitGatewayRouteTableResultTransitGatewayRouteTable extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  defaultAssociationRouteTable?: Record<string, any>;

  @SpeakeasyMetadata()
  defaultPropagationRouteTable?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: Record<string, any>;
}


export class CreateTransitGatewayRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayRouteTable?: CreateTransitGatewayRouteTableResultTransitGatewayRouteTable;
}
