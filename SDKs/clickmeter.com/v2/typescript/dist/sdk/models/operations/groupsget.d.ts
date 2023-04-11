import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the group
 */
export declare enum GroupsGetStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class GroupsGetRequest extends SpeakeasyBase {
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
     * Status of the group
     */
    status?: GroupsGetStatusEnum;
    /**
     * A comma separated list of tags you want to filter with.
     */
    tags?: string;
    /**
     * Filter fields by this pattern
     */
    textSearch?: string;
    /**
     * Write permission
     */
    write?: boolean;
}
export declare class GroupsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
