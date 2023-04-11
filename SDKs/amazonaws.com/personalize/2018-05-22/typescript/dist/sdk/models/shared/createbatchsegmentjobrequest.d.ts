import { SpeakeasyBase } from "../../../internal/utils";
import { BatchSegmentJobInput } from "./batchsegmentjobinput";
import { BatchSegmentJobOutput } from "./batchsegmentjoboutput";
import { Tag } from "./tag";
export declare class CreateBatchSegmentJobRequest extends SpeakeasyBase {
    filterArn?: string;
    jobInput: BatchSegmentJobInput;
    jobName: string;
    jobOutput: BatchSegmentJobOutput;
    numResults?: number;
    roleArn: string;
    solutionVersionArn: string;
    tags?: Tag[];
}
