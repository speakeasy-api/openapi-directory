import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPutGeofenceError } from "./batchputgeofenceerror";
import { BatchPutGeofenceSuccess } from "./batchputgeofencesuccess";
/**
 * Success
 */
export declare class BatchPutGeofenceResponse extends SpeakeasyBase {
    errors: BatchPutGeofenceError[];
    successes: BatchPutGeofenceSuccess[];
}
