import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort order of the results.
 */
export declare enum GetEpisodesByCategorySortEnum {
    Recent = "recent",
    Popular = "popular"
}
export declare class GetEpisodesByCategoryRequest extends SpeakeasyBase {
    /**
     * Whether to return all, or available programmes
     */
    availability: shared.AvailabilityEnum;
    /**
     * The category identifier to return results from.
     */
    category: string;
    /**
     * The language for any applicable localised strings.
     */
    lang: shared.LangEnum;
    /**
     * The page index.
     */
    page: number;
    /**
     * The number of results to return.
     */
    perPage: number;
    /**
     * The rights group to limit results to.
     */
    rights: shared.RightsEnum;
    /**
     * The sort order of the results.
     */
    sort?: GetEpisodesByCategorySortEnum;
}
export declare class GetEpisodesByCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
