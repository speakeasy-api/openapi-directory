import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentRecommendation } from "./componentrecommendation";
/**
 * Success
 */
export declare class ListAppComponentRecommendationsResponse extends SpeakeasyBase {
    componentRecommendations: ComponentRecommendation[];
    nextToken?: string;
}
