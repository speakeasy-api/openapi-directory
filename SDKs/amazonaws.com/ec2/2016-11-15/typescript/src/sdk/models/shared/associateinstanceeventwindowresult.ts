import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
/** 
 * One or more targets associated with the event window.
**/
export class AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dedicatedHostIds?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceIds?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


// AssociateInstanceEventWindowResultInstanceEventWindow
/** 
 * Information about the event window.
**/
export class AssociateInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationTarget?: AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget;

  @SpeakeasyMetadata()
  cronExpression?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceEventWindowId?: Record<string, any>;

  @SpeakeasyMetadata()
  name?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  timeRanges?: Record<string, any>;
}


export class AssociateInstanceEventWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceEventWindow?: AssociateInstanceEventWindowResultInstanceEventWindow;
}
