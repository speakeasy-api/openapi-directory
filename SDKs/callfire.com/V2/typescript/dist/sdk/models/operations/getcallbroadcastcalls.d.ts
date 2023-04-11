import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCallBroadcastCallsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCallBroadcastCallsRequest extends SpeakeasyBase {
    /**
     * An id of a particular batch associated with broadcast
     */
    batchId?: number;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An Id of a call broadcast
     */
    id: number;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
}
export declare class GetCallBroadcastCallsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    callPage?: shared.CallPage;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
