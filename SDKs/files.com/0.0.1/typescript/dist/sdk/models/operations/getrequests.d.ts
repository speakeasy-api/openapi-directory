import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRequestsRequest extends SpeakeasyBase {
    /**
     * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
     */
    cursor?: string;
    /**
     * Only show requests of the current user?  (Defaults to true if current user is not a site admin.)
     */
    mine?: boolean;
    /**
     * Path to show requests for.  If omitted, shows all paths. Send `/` to represent the root directory.
     */
    path?: string;
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     */
    perPage?: number;
    /**
     * If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[destination]=desc`). Valid fields are `destination`.
     */
    sortBy?: Record<string, any>;
}
export declare class GetRequestsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of Requests objects.
     */
    requestEntities?: shared.RequestEntity[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
