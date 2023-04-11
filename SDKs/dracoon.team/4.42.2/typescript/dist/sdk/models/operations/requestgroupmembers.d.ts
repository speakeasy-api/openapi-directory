import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestGroupMembersRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Filter string
     */
    filter?: string;
    /**
     * Group ID
     */
    groupId: number;
    /**
     * Range limit.
     *
     * @remarks
     *
     * Maximum 500.
     *
     *  For more results please use paging (`offset` + `limit`).
     */
    limit?: number;
    /**
     * Range offset
     */
    offset?: number;
}
export declare class RequestGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    groupUserList?: shared.GroupUserList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
