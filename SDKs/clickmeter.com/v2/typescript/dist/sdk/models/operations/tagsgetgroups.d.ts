import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the datapoint
 */
export declare enum TagsGetGroupsStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class TagsGetGroupsRequest extends SpeakeasyBase {
    /**
     * Exclude groups created before this date (YYYYMMDD)
     */
    createdAfter?: string;
    /**
     * Exclude groups created after this date (YYYYMMDD)
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
    status?: TagsGetGroupsStatusEnum;
    /**
     * Id of the tag.
     */
    tagId: number;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
}
export declare class TagsGetGroupsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
