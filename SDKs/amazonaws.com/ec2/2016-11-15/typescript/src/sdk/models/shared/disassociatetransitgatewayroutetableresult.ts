import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisassociateTransitGatewayRouteTableResultAssociation
/** 
 * Information about the association.
**/
export class DisassociateTransitGatewayRouteTableResultAssociation extends SpeakeasyBase {
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


export class DisassociateTransitGatewayRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: DisassociateTransitGatewayRouteTableResultAssociation;
}
