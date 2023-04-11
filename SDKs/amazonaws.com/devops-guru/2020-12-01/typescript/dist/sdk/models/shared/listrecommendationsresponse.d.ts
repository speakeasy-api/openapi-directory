import { SpeakeasyBase } from "../../../internal/utils";
import { Recommendation } from "./recommendation";
/**
 * Success
 */
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendations?: Recommendation[];
}
