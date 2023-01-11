import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget
/** 
 * One or more targets associated with the event window.
**/
export class CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dedicatedHostIds?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceIds?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


// CreateInstanceEventWindowResultInstanceEventWindow
/** 
 * Information about the event window.
**/
export class CreateInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationTarget?: CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget;

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


export class CreateInstanceEventWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceEventWindow?: CreateInstanceEventWindowResultInstanceEventWindow;
}
