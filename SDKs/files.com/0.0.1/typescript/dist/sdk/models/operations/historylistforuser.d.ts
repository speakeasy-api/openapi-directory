import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HistoryListForUserRequest extends SpeakeasyBase {
    /**
     * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
     */
    cursor?: string;
    /**
     * Display format. Leave blank or set to `full` or `parent`.
     */
    display?: string;
    /**
     * Leave blank or set to a date/time to filter later entries.
     */
    endAt?: Date;
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     */
    perPage?: number;
    /**
     * If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[user_id]=desc`). Valid fields are `user_id` and `created_at`.
     */
    sortBy?: Record<string, any>;
    /**
     * Leave blank or set to a date/time to filter earlier entries.
     */
    startAt?: Date;
    /**
     * User ID.
     */
    userId: number;
}
export declare class HistoryListForUserResponse extends SpeakeasyBase {
    /**
     * A list of History objects.
     */
    actionEntities?: shared.ActionEntity[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
