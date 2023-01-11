import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchSnapshotOperationErrors } from "./batchsnapshotoperationerrors";



export class BatchModifyClusterSnapshotsOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BatchSnapshotOperationErrors })
  errors?: BatchSnapshotOperationErrors[];

  @SpeakeasyMetadata()
  resources?: Record<string, any>[];
}
