import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindKeywordLeaseConfigsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindKeywordLeaseConfigsRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * Filter by part of Keyword name or Label name of Keyword
     */
    filter?: string;
    /**
     * An exact label name to search by
     */
    labelName?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
}
export declare class FindKeywordLeaseConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    page?: shared.Page;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
