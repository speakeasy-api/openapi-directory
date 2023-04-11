import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the datapoint
 */
export declare enum TagsGetDatapointsCountStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
/**
 * Type of the datapoint ("tp"/"tl")
 */
export declare enum TagsGetDatapointsCountTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class TagsGetDatapointsCountRequest extends SpeakeasyBase {
    /**
     * Exclude datapoints created before this date (YYYYMMDD)
     */
    createdAfter?: string;
    /**
     * Exclude datapoints created after this date (YYYYMMDD)
     */
    createdBefore?: string;
    /**
     * Status of the datapoint
     */
    status?: TagsGetDatapointsCountStatusEnum;
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
    type?: TagsGetDatapointsCountTypeEnum;
}
export declare class TagsGetDatapointsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
