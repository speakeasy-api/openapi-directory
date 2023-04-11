import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupsGroupIdUsersRequest extends SpeakeasyBase {
    /**
     * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
     */
    cursor?: string;
    /**
     * Group ID.  If provided, will return group_users of this group.
     */
    groupId: number;
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     */
    perPage?: number;
    /**
     * User ID.  If provided, will return group_users of this user.
     */
    userId?: number;
}
export declare class GetGroupsGroupIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of GroupUsers objects.
     */
    groupUserEntities?: shared.GroupUserEntity[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
