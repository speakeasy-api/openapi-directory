import { SpeakeasyBase } from "../../../internal/utils";
import { BatchSnapshotOperationErrors } from "./batchsnapshotoperationerrors";
/**
 * Success
 */
export declare class BatchModifyClusterSnapshotsOutputMessage extends SpeakeasyBase {
    errors?: BatchSnapshotOperationErrors[];
    resources?: string[];
}
