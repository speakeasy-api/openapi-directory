import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostGroupsRequestBody extends SpeakeasyBase {
    /**
     * A list of group admin user ids. If sent as a string, should be comma-delimited.
     */
    adminIds?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Group notes.
     */
    notes?: string;
    /**
     * A list of user ids. If sent as a string, should be comma-delimited.
     */
    userIds?: string;
}
export declare class PostGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Groups object.
     */
    groupEntity?: shared.GroupEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
