import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListGroupsRequest extends SpeakeasyBase {
    /**
     * The number of groups to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of groups to skip before starting the result set.  Defaults to 0.
     */
    offset?: number;
    /**
     * Sort order, ascending (`asc`) or descending (`desc`).
     */
    order?: shared.SortOrderEnum;
    /**
     * The field to sort by.  Can be one of:
     *
     * @remarks
     *
     * * `name`
     * * `createdOn`
     *
     */
    orderby?: shared.SortByEnum;
}
export declare class ListGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    /**
     * On a successful response, returns a bounded set of groups.
     */
    groupSearchResults?: shared.GroupSearchResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
