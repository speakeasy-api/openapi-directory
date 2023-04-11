import { SpeakeasyBase } from "../../../internal/utils";
import { ImageRecipeSummary } from "./imagerecipesummary";
/**
 * Success
 */
export declare class ListImageRecipesResponse extends SpeakeasyBase {
    imageRecipeSummaryList?: ImageRecipeSummary[];
    nextToken?: string;
    requestId?: string;
}
