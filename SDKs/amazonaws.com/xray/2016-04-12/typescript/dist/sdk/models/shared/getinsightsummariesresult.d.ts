import { SpeakeasyBase } from "../../../internal/utils";
import { InsightSummary } from "./insightsummary";
/**
 * Success
 */
export declare class GetInsightSummariesResult extends SpeakeasyBase {
    insightSummaries?: InsightSummary[];
    nextToken?: string;
}
