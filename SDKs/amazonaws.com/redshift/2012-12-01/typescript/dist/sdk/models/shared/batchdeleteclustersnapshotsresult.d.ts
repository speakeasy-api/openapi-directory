import { SpeakeasyBase } from "../../../internal/utils";
import { BatchSnapshotOperationErrorList } from "./batchsnapshotoperationerrorlist";
/**
 * Success
 */
export declare class BatchDeleteClusterSnapshotsResult extends SpeakeasyBase {
    errors?: BatchSnapshotOperationErrorList[];
    resources?: string[];
}
