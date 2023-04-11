import { SpeakeasyBase } from "../../../internal/utils";
import { SopRecommendation } from "./soprecommendation";
/**
 * Success
 */
export declare class ListSopRecommendationsResponse extends SpeakeasyBase {
    nextToken?: string;
    sopRecommendations: SopRecommendation[];
}
