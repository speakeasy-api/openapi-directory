import { SpeakeasyBase } from "../../../internal/utils";
import { BatchError } from "./batcherror";
import { StreamKey } from "./streamkey";
/**
 * Success
 */
export declare class BatchGetStreamKeyResponse extends SpeakeasyBase {
    errors?: BatchError[];
    streamKeys?: StreamKey[];
}
