import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the datapoint
 */
export declare enum TagsGetDatapointsStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
/**
 * Type of the datapoint ("tp"/"tl")
 */
export declare enum TagsGetDatapointsTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class TagsGetDatapointsRequest extends SpeakeasyBase {
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
     * Status of the datapoint
     */
    status?: TagsGetDatapointsStatusEnum;
    /**
     * Id of the tag.
     */
    tagId: number;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
    /**
     * Type of the datapoint ("tp"/"tl")
     */
    type?: TagsGetDatapointsTypeEnum;
}
export declare class TagsGetDatapointsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
