import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable
/** 
 * Information about the deleted transit gateway route table.
**/
export class DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable extends SpeakeasyBase {
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


export class DeleteTransitGatewayRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayRouteTable?: DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable;
}
