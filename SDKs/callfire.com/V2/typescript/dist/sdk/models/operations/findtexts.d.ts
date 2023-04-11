import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindTextsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindTextsRequest extends SpeakeasyBase {
    /**
     * An Id of a contact batch, queries for texts which are used in the particular contact batch
     */
    batchId?: number;
    /**
     * An id of a campaign, queries for texts inside a particular campaign. Specify null to list texts of all campaigns or 0 for a default campaign
     */
    campaignId?: number;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * A phone number in E.164 format (11-digit). Example: 12132000384, 67076
     */
    fromNumber?: string;
    /**
     * List of Text ids to search for, if ids specified other query params ignored
     */
    id?: number[];
    /**
     * Specify true for inbound or false for outbounds. Do not specify this parameter if you need to get both inbound and outbound texts listed in response
     */
    inbound?: boolean;
    /**
     * Start of the find time interval, formatted in unix time milliseconds. Example: 1473781817000
     */
    intervalBegin?: number;
    /**
     * End of the find time interval, formatted in unix time milliseconds. Example: 1473781817000
     */
    intervalEnd?: number;
    /**
     * A label of a text message
     */
    label?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
    /**
     * Expected text results in comma separated string, available values: SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    results?: string;
    /**
     * Expected text statuses in comma separated string, available values: READY, SELECTED, CALLBACK, FINISHED, DISABLED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    states?: string;
    /**
     * A phone number in E.164 format (11-digit). Example: 12132000384, 67076
     */
    toNumber?: string;
}
export declare class FindTextsResponse extends SpeakeasyBase {
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
