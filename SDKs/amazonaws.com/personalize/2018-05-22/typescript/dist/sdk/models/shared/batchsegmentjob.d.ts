import { SpeakeasyBase } from "../../../internal/utils";
import { BatchSegmentJobInput } from "./batchsegmentjobinput";
import { BatchSegmentJobOutput } from "./batchsegmentjoboutput";
/**
 * Contains information on a batch segment job.
 */
export declare class BatchSegmentJob extends SpeakeasyBase {
    batchSegmentJobArn?: string;
    creationDateTime?: Date;
    failureReason?: string;
    filterArn?: string;
    jobInput?: BatchSegmentJobInput;
    jobName?: string;
    jobOutput?: BatchSegmentJobOutput;
    lastUpdatedDateTime?: Date;
    numResults?: number;
    roleArn?: string;
    solutionVersionArn?: string;
    status?: string;
}
