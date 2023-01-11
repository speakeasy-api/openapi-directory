import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
/** 
 * One or more targets associated with the event window.
**/
export class DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dedicatedHostIds?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceIds?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


// DisassociateInstanceEventWindowResultInstanceEventWindow
/** 
 * Information about the event window.
**/
export class DisassociateInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationTarget?: DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget;

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


export class DisassociateInstanceEventWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceEventWindow?: DisassociateInstanceEventWindowResultInstanceEventWindow;
}
