import { SpeakeasyBase } from "../../../internal/utils";
import { TargetedSentimentDetectionJobFilter } from "./targetedsentimentdetectionjobfilter";
export declare class ListTargetedSentimentDetectionJobsRequest extends SpeakeasyBase {
    filter?: TargetedSentimentDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
