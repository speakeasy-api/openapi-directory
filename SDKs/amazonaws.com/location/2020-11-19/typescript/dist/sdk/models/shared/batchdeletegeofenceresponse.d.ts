import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDeleteGeofenceError } from "./batchdeletegeofenceerror";
/**
 * Success
 */
export declare class BatchDeleteGeofenceResponse extends SpeakeasyBase {
    errors: BatchDeleteGeofenceError[];
}
