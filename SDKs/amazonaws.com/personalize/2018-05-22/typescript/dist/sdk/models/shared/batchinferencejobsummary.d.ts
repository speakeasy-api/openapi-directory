import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchInferenceJob.html">BatchInferenceJob</a>. The <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html">ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries.
 */
export declare class BatchInferenceJobSummary extends SpeakeasyBase {
    batchInferenceJobArn?: string;
    creationDateTime?: Date;
    failureReason?: string;
    jobName?: string;
    lastUpdatedDateTime?: Date;
    solutionVersionArn?: string;
    status?: string;
}
