import { SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobSummary } from "./labelingjobsummary";
/**
 * Success
 */
export declare class ListLabelingJobsResponse extends SpeakeasyBase {
    labelingJobSummaryList?: LabelingJobSummary[];
    nextToken?: string;
}
