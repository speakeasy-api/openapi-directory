import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNotificationsRequest extends SpeakeasyBase {
    /**
     * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
     */
    cursor?: string;
    /**
     * If set, return records where the specified field is equal to the supplied value. Valid fields are `user_id`, `group_id` or `path`.
     */
    filter?: Record<string, any>;
    /**
     * If set, return records where the specified field is greater than the supplied value. Valid fields are `user_id`, `group_id` or `path`.
     */
    filterGt?: Record<string, any>;
    /**
     * If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `user_id`, `group_id` or `path`.
     */
    filterGteq?: Record<string, any>;
    /**
     * If set, return records where the specified field is equal to the supplied value. Valid fields are `user_id`, `group_id` or `path`.
     */
    filterLike?: Record<string, any>;
    /**
     * If set, return records where the specified field is less than the supplied value. Valid fields are `user_id`, `group_id` or `path`.
     */
    filterLt?: Record<string, any>;
    /**
     * If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `user_id`, `group_id` or `path`.
     */
    filterLteq?: Record<string, any>;
    /**
     * DEPRECATED: Show notifications for this Group ID. Use `filter[group_id]` instead.
     */
    groupId?: number;
    /**
     * If `include_ancestors` is `true` and `path` is specified, include notifications for any parent paths. Ignored if `path` is not specified.
     */
    includeAncestors?: boolean;
    /**
     * Show notifications for this Path.
     */
    path?: string;
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     */
    perPage?: number;
    /**
     * If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[path]=desc`). Valid fields are `path`, `user_id` or `group_id`.
     */
    sortBy?: Record<string, any>;
    /**
     * DEPRECATED: Show notifications for this User ID. Use `filter[user_id]` instead.
     */
    userId?: number;
}
export declare class GetNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of Notifications objects.
     */
    notificationEntities?: shared.NotificationEntity[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
