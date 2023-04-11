import { SpeakeasyBase } from "../../../internal/utils";
import { Recommendation } from "./recommendation";
/**
 * Contains the response to your request to retrieve the list of recommendations for your account.
 */
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendations?: Recommendation[];
}
