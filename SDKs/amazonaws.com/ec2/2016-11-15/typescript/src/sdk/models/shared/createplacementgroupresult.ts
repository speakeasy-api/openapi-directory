import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreatePlacementGroupResultPlacementGroup
/** 
 * Describes a placement group.
**/
export class CreatePlacementGroupResultPlacementGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupId?: Record<string, any>;

  @SpeakeasyMetadata()
  groupName?: Record<string, any>;

  @SpeakeasyMetadata()
  partitionCount?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  strategy?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class CreatePlacementGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  placementGroup?: CreatePlacementGroupResultPlacementGroup;
}
