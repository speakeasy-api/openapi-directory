import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateRouteTableResultAssociationState
/** 
 * The state of the association.
**/
export class AssociateRouteTableResultAssociationState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


export class AssociateRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  associationState?: AssociateRouteTableResultAssociationState;
}
