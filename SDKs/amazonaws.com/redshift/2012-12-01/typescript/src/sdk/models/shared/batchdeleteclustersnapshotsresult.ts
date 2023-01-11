import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchSnapshotOperationErrorList } from "./batchsnapshotoperationerrorlist";



export class BatchDeleteClusterSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BatchSnapshotOperationErrorList })
  errors?: BatchSnapshotOperationErrorList[];

  @SpeakeasyMetadata()
  resources?: Record<string, any>[];
}
