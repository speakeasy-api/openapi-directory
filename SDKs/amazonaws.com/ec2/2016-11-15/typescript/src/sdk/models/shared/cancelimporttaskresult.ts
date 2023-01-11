import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelImportTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  importTaskId?: Record<string, any>;

  @SpeakeasyMetadata()
  previousState?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;
}
