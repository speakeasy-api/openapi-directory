import { SpeakeasyBase } from "../../../internal/utils";
import { RetryableFailureTypeEnum } from "./retryablefailuretypeenum";
/**
 * The criteria that determines how many retries are allowed for each failure type for a job.
 */
export declare class RetryCriteria extends SpeakeasyBase {
    failureType: RetryableFailureTypeEnum;
    numberOfRetries: number;
}
