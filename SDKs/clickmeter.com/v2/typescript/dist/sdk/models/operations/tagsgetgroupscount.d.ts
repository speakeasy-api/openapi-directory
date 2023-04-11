import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the datapoint
 */
export declare enum TagsGetGroupsCountStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class TagsGetGroupsCountRequest extends SpeakeasyBase {
    /**
     * Exclude groups created before this date (YYYYMMDD)
     */
    createdAfter?: string;
    /**
     * Exclude groups created after this date (YYYYMMDD)
     */
    createdBefore?: string;
    /**
     * Status of the datapoint
     */
    status?: TagsGetGroupsCountStatusEnum;
    /**
     * Id of the tag.
     */
    tagId: number;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
}
export declare class TagsGetGroupsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
