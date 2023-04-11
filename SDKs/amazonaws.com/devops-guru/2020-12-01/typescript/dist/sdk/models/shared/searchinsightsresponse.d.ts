import { SpeakeasyBase } from "../../../internal/utils";
import { ProactiveInsightSummary } from "./proactiveinsightsummary";
import { ReactiveInsightSummary } from "./reactiveinsightsummary";
/**
 * Success
 */
export declare class SearchInsightsResponse extends SpeakeasyBase {
    nextToken?: string;
    proactiveInsights?: ProactiveInsightSummary[];
    reactiveInsights?: ReactiveInsightSummary[];
}
