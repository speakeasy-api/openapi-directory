import { SpeakeasyBase } from "../../../internal/utils";
import { Recommendation } from "./recommendation";
/**
 * Success
 */
export declare class DescribeRecommendationsResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendations?: Recommendation[];
}
