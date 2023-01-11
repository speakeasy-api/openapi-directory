import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget
/** 
 * One or more targets associated with the event window.
**/
export class ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dedicatedHostIds?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceIds?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


// ModifyInstanceEventWindowResultInstanceEventWindow
/** 
 * Information about the event window.
**/
export class ModifyInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationTarget?: ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget;

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


export class ModifyInstanceEventWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceEventWindow?: ModifyInstanceEventWindowResultInstanceEventWindow;
}
