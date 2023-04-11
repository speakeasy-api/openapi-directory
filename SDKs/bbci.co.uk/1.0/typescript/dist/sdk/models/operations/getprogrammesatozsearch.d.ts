import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort order of the results.
 */
export declare enum GetProgrammesAtoZSearchSortEnum {
    Title = "title"
}
export declare class GetProgrammesAtoZSearchRequest extends SpeakeasyBase {
    /**
     * Whether to return all, or available programmes
     */
    availability: shared.AvailabilityEnum;
    /**
     * The depth to return child entities.
     */
    initialChildCount: number;
    /**
     * Letter to search by, a to z or the string '0-9'
     */
    letter: string;
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
    sort: GetProgrammesAtoZSearchSortEnum;
    /**
     * Whether to sort ascending or descending
     */
    sortDirection: shared.SortDirectionEnum;
}
export declare class GetProgrammesAtoZSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
