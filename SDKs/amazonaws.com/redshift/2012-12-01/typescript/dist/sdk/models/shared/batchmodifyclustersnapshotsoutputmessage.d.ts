import { SpeakeasyBase } from "../../../internal/utils";
import { BatchSnapshotOperationErrors } from "./batchsnapshotoperationerrors";
export declare class BatchModifyClusterSnapshotsOutputMessage extends SpeakeasyBase {
    errors?: BatchSnapshotOperationErrors[];
    resources?: Record<string, any>[];
}
