import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateReplaceRootVolumeTaskResultReplaceRootVolumeTask
/** 
 * Information about the root volume replacement task.
**/
export class CreateReplaceRootVolumeTaskResultReplaceRootVolumeTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  completeTime?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  replaceRootVolumeTaskId?: Record<string, any>;

  @SpeakeasyMetadata()
  startTime?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  taskState?: Record<string, any>;
}


export class CreateReplaceRootVolumeTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  replaceRootVolumeTask?: CreateReplaceRootVolumeTaskResultReplaceRootVolumeTask;
}
