import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPrioritiesRequest extends SpeakeasyBase {
    /**
     * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
     */
    cursor?: string;
    /**
     * The path to query for priorities
     */
    path: string;
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     */
    perPage?: number;
}
export declare class GetPrioritiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of Priorities objects.
     */
    priorityEntities?: shared.PriorityEntity[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
