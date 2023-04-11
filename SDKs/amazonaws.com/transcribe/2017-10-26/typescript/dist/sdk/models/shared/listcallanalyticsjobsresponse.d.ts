import { SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
import { CallAnalyticsJobSummary } from "./callanalyticsjobsummary";
/**
 * Success
 */
export declare class ListCallAnalyticsJobsResponse extends SpeakeasyBase {
    callAnalyticsJobSummaries?: CallAnalyticsJobSummary[];
    nextToken?: string;
    status?: CallAnalyticsJobStatusEnum;
}
