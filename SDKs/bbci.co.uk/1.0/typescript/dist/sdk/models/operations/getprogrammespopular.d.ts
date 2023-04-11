import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProgrammesPopularRequest extends SpeakeasyBase {
    /**
     * Whether to return all, or available programmes
     */
    availability: shared.AvailabilityEnum;
    /**
     * The depth to return child entities.
     */
    initialChildCount: number;
    /**
     * Request additional data in the output
     */
    mixin?: shared.MixinEnum;
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
    sort: string;
    /**
     * Whether to sort ascending or descending
     */
    sortDirection: shared.SortDirectionEnum;
}
export declare class GetProgrammesPopularResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
