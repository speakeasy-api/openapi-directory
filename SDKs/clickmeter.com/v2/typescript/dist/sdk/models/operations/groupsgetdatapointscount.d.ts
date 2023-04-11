import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the datapoint
 */
export declare enum GroupsGetDatapointsCountStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
/**
 * Type of the datapoint ("tp"/"tl")
 */
export declare enum GroupsGetDatapointsCountTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class GroupsGetDatapointsCountRequest extends SpeakeasyBase {
    /**
     * Exclude datapoints created before this date (YYYYMMDD)
     */
    createdAfter?: string;
    /**
     * Exclude datapoints created after this date (YYYYMMDD)
     */
    createdBefore?: string;
    /**
     * Id of the group
     */
    id: number;
    /**
     * Filter fields by favourite status
     */
    onlyFavorites?: boolean;
    /**
     * Status of the datapoint
     */
    status?: GroupsGetDatapointsCountStatusEnum;
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
    type?: GroupsGetDatapointsCountTypeEnum;
}
export declare class GroupsGetDatapointsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
