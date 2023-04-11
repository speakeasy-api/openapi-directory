import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyGroupStatistics } from "./anomalygroupstatistics";
import { AnomalyGroupSummary } from "./anomalygroupsummary";
/**
 * Success
 */
export declare class ListAnomalyGroupSummariesResponse extends SpeakeasyBase {
    anomalyGroupStatistics?: AnomalyGroupStatistics;
    anomalyGroupSummaryList?: AnomalyGroupSummary[];
    nextToken?: string;
}
