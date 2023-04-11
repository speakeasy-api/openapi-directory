import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Direction of sort "asc" or "desc"
 */
export declare enum RetargetingGetDatapointsSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Status of the datapoint
 */
export declare enum RetargetingGetDatapointsStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare class RetargetingGetDatapointsRequest extends SpeakeasyBase {
    /**
     * Exclude datapoints created before this date (YYYYMMDD)
     */
    createdAfter?: string;
    /**
     * Exclude datapoints created after this date (YYYYMMDD)
     */
    createdBefore?: string;
    /**
     * Id of the retargeting script
     */
    id: number;
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
    sortDirection?: RetargetingGetDatapointsSortDirectionEnum;
    /**
     * Status of the datapoint
     */
    status?: RetargetingGetDatapointsStatusEnum;
    /**
     * A comma separated list of tags you want to filter with.
     */
    tags?: string;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
}
export declare class RetargetingGetDatapointsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
