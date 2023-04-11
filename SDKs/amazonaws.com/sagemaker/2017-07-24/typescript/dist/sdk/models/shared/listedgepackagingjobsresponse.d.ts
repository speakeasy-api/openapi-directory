import { SpeakeasyBase } from "../../../internal/utils";
import { EdgePackagingJobSummary } from "./edgepackagingjobsummary";
/**
 * Success
 */
export declare class ListEdgePackagingJobsResponse extends SpeakeasyBase {
    edgePackagingJobSummaries: EdgePackagingJobSummary[];
    nextToken?: string;
}
