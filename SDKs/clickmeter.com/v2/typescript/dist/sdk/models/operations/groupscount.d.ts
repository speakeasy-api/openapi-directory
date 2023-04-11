import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the datapoint
 */
export declare enum GroupsCountStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class GroupsCountRequest extends SpeakeasyBase {
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
    status?: GroupsCountStatusEnum;
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
export declare class GroupsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
