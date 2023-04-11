import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1MediasSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
/**
 * Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
 */
export declare enum GetApiV1MediasSortEnum {
    CreatedAt = "created_at",
    MinusCreatedAt = "-created_at",
    OriginalCreatedAt = "original_created_at",
    MinusOriginalCreatedAt = "-original_created_at",
    Name = "name",
    MinusName = "-name"
}
export declare class GetApiV1MediasRequest extends SpeakeasyBase {
    /**
     * Filters to be applied to the query.
     *
     * @remarks
     *
     * Query params in the url must look like this: "filter[attributeName_*matcher*]"
     *
     * (i.e. filter[name_eq]=chimp%20into%20space)
     *
     * Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/
     *
     *
     */
    filter?: Record<string, any>;
    /**
     * Specify page number and page size for the query
     */
    page?: Record<string, any>;
    /**
     * Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
     */
    sort?: GetApiV1MediasSortEnum;
}
export declare class GetApiV1MediasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
