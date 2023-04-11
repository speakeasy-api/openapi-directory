import { SpeakeasyBase } from "../../../internal/utils";
import { InsightEvent } from "./insightevent";
/**
 * Success
 */
export declare class GetInsightEventsResult extends SpeakeasyBase {
    insightEvents?: InsightEvent[];
    nextToken?: string;
}
