import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
import { SyncResourceStateEnum } from "./syncresourcestateenum";
/**
 * The sync resource status.
 */
export declare class SyncResourceStatus extends SpeakeasyBase {
    error?: ErrorDetails;
    state?: SyncResourceStateEnum;
}
