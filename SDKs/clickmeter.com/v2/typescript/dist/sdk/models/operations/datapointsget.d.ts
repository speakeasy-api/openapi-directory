import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Direction of sort "asc" or "desc"
 */
export declare enum DataPointsGetSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Status of the datapoint
 */
export declare enum DataPointsGetStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
/**
 * Type of the datapoint ("tp"/"tl")
 */
export declare enum DataPointsGetTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class DataPointsGetRequest extends SpeakeasyBase {
    /**
     * Exclude datapoints created before this date (YYYYMMDD)
     */
    createdAfter?: string;
    /**
     * Exclude datapoints created after this date (YYYYMMDD)
     */
    createdBefore?: string;
    /**
     * Maximum elements to retrieve. Default to 20 if not specified.
     */
    limit?: number;
    /**
     * Where to start when retrieving elements. Default is 0 if not specified.
     */
    offset?: number;
    /**
     * Filter fields by favourite status
     */
    onlyFavorites?: boolean;
    /**
     * Field to sort by
     */
    sortBy?: string;
    /**
     * Direction of sort "asc" or "desc"
     */
    sortDirection?: DataPointsGetSortDirectionEnum;
    /**
     * Status of the datapoint
     */
    status?: DataPointsGetStatusEnum;
    /**
     * A comma separated list of tags you want to filter with.
     */
    tags?: string;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
    /**
     * Type of the datapoint ("tp"/"tl")
     */
    type?: DataPointsGetTypeEnum;
}
export declare class DataPointsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
