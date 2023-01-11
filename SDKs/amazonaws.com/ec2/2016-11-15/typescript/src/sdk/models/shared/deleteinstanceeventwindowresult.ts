import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteInstanceEventWindowResultInstanceEventWindowState
/** 
 * The state of the event window.
**/
export class DeleteInstanceEventWindowResultInstanceEventWindowState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceEventWindowId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;
}


export class DeleteInstanceEventWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceEventWindowState?: DeleteInstanceEventWindowResultInstanceEventWindowState;
}
