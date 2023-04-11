import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindTextBroadcastsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindTextBroadcastsRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * Start of the find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    intervalBegin?: number;
    /**
     * End of the find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    intervalEnd?: number;
    /**
     * A label of a text broadcast
     */
    label?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * A name of text broadcast
     */
    name?: string;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
    /**
     * Returns broadcasts only in running state.
     */
    running?: boolean;
    /**
     * Specify whether the campaigns should be scheduled or not
     */
    scheduled?: boolean;
}
export declare class FindTextBroadcastsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    textBroadcastPage?: shared.TextBroadcastPage;
}
