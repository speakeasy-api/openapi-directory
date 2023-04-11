import { SpeakeasyBase } from "../../../internal/utils";
import { TestRecommendation } from "./testrecommendation";
/**
 * Success
 */
export declare class ListTestRecommendationsResponse extends SpeakeasyBase {
    nextToken?: string;
    testRecommendations: TestRecommendation[];
}
