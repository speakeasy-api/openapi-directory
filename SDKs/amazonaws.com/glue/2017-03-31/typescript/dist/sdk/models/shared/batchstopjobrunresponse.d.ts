import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStopJobRunError } from "./batchstopjobrunerror";
import { BatchStopJobRunSuccessfulSubmission } from "./batchstopjobrunsuccessfulsubmission";
/**
 * Success
 */
export declare class BatchStopJobRunResponse extends SpeakeasyBase {
    errors?: BatchStopJobRunError[];
    successfulSubmissions?: BatchStopJobRunSuccessfulSubmission[];
}
