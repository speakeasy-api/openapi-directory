import { SpeakeasyBase } from "../../../internal/utils";
import { JobQueueDetail } from "./jobqueuedetail";
/**
 * Success
 */
export declare class DescribeJobQueuesResponse extends SpeakeasyBase {
    jobQueues?: JobQueueDetail[];
    nextToken?: string;
}
