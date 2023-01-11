import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateTransitGatewayRouteTableResultAssociation
/** 
 * The ID of the association.
**/
export class AssociateTransitGatewayRouteTableResultAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: Record<string, any>;

  @SpeakeasyMetadata()
  resourceType?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: Record<string, any>;
}


export class AssociateTransitGatewayRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: AssociateTransitGatewayRouteTableResultAssociation;
}
