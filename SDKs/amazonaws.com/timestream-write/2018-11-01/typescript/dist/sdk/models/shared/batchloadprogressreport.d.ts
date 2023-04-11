import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the progress of a batch load task.
 */
export declare class BatchLoadProgressReport extends SpeakeasyBase {
    bytesMetered?: number;
    fileFailures?: number;
    parseFailures?: number;
    recordIngestionFailures?: number;
    recordsIngested?: number;
    recordsProcessed?: number;
}
