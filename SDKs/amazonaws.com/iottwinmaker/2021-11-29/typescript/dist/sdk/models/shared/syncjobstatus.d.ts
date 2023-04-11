import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
import { SyncJobStateEnum } from "./syncjobstateenum";
/**
 * The SyncJob status.
 */
export declare class SyncJobStatus extends SpeakeasyBase {
    error?: ErrorDetails;
    state?: SyncJobStateEnum;
}
