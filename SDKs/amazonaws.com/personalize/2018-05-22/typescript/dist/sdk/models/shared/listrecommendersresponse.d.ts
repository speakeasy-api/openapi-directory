import { SpeakeasyBase } from "../../../internal/utils";
import { RecommenderSummary } from "./recommendersummary";
/**
 * Success
 */
export declare class ListRecommendersResponse extends SpeakeasyBase {
    nextToken?: string;
    recommenders?: RecommenderSummary[];
}
