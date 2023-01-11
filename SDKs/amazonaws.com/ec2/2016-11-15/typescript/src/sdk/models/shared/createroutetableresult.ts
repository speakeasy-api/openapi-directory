import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateRouteTableResultRouteTable
/** 
 * Information about the route table.
**/
export class CreateRouteTableResultRouteTable extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associations?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  propagatingVgws?: Record<string, any>;

  @SpeakeasyMetadata()
  routeTableId?: Record<string, any>;

  @SpeakeasyMetadata()
  routes?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


export class CreateRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  routeTable?: CreateRouteTableResultRouteTable;
}
