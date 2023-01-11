import { SpeakeasyBase } from "../../../internal/utils";
import { BatchSnapshotOperationErrorList } from "./batchsnapshotoperationerrorlist";
export declare class BatchDeleteClusterSnapshotsResult extends SpeakeasyBase {
    errors?: BatchSnapshotOperationErrorList[];
    resources?: Record<string, any>[];
}
