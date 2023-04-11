import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindTextAutoReplysSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindTextAutoReplysRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * Phone number in E.164 format (11-digit) which contains a TextAutoReply. Example: 12132000384. If number is empty then operator returns all autoreplies configured for the user's account
     */
    number?: string;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
}
export declare class FindTextAutoReplysResponse extends SpeakeasyBase {
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
    textAutoReplyPage?: shared.TextAutoReplyPage;
}
