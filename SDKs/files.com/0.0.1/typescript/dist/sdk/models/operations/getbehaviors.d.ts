import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBehaviorsRequest extends SpeakeasyBase {
    /**
     * If set, only shows folder behaviors matching this behavior type.
     */
    behavior?: string;
    /**
     * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
     */
    cursor?: string;
    /**
     * If set, return records where the specified field is equal to the supplied value. Valid fields are `behavior`.
     */
    filter?: Record<string, any>;
    /**
     * If set, return records where the specified field is greater than the supplied value. Valid fields are `behavior`.
     */
    filterGt?: Record<string, any>;
    /**
     * If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `behavior`.
     */
    filterGteq?: Record<string, any>;
    /**
     * If set, return records where the specified field is equal to the supplied value. Valid fields are `behavior`.
     */
    filterLike?: Record<string, any>;
    /**
     * If set, return records where the specified field is less than the supplied value. Valid fields are `behavior`.
     */
    filterLt?: Record<string, any>;
    /**
     * If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `behavior`.
     */
    filterLteq?: Record<string, any>;
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     */
    perPage?: number;
    /**
     * If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[behavior]=desc`). Valid fields are `behavior`.
     */
    sortBy?: Record<string, any>;
}
export declare class GetBehaviorsResponse extends SpeakeasyBase {
    /**
     * A list of Behaviors objects.
     */
    behaviorEntities?: shared.BehaviorEntity[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
