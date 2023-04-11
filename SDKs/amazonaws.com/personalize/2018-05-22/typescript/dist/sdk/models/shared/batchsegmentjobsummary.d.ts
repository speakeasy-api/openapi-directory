import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchSegmentJob.html">BatchSegmentJob</a> datatype. <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html">ListBatchSegmentJobs</a> operation returns a list of batch segment job summaries.
 */
export declare class BatchSegmentJobSummary extends SpeakeasyBase {
    batchSegmentJobArn?: string;
    creationDateTime?: Date;
    failureReason?: string;
    jobName?: string;
    lastUpdatedDateTime?: Date;
    solutionVersionArn?: string;
    status?: string;
}
