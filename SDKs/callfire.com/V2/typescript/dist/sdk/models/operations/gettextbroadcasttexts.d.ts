import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTextBroadcastTextsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetTextBroadcastTextsRequest extends SpeakeasyBase {
    /**
     * ~
     */
    batchId?: number;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of a text broadcast
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
export declare class GetTextBroadcastTextsResponse extends SpeakeasyBase {
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
    textPage?: shared.TextPage;
}
