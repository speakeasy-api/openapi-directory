import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindDoNotContactsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindDoNotContactsRequest extends SpeakeasyBase {
    /**
     * Show only Do-Not-Call numbers
     */
    call?: boolean;
    /**
     * A campaign id which was used to send a message to a DNC number
     */
    campaignId?: number;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * ~
     */
    inboundCall?: boolean;
    /**
     * ~
     */
    inboundText?: boolean;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * ~
     */
    number?: string[];
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
    /**
     * Prefix (1-10 digits) of phone numbers
     */
    prefix?: string;
    /**
     * A DNC source name to search for DNCs
     */
    source?: string;
    /**
     * Show only Do-Not-Text numbers
     */
    text?: boolean;
}
export declare class FindDoNotContactsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    doNotContactPage?: shared.DoNotContactPage;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
