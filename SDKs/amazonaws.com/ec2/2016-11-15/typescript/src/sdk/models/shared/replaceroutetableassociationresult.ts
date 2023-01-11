import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplaceRouteTableAssociationResultAssociationState
/** 
 * The state of the association.
**/
export class ReplaceRouteTableAssociationResultAssociationState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


export class ReplaceRouteTableAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationState?: ReplaceRouteTableAssociationResultAssociationState;

  @SpeakeasyMetadata()
  newAssociationId?: Record<string, any>;
}
