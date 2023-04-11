import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindCallsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindCallsRequest extends SpeakeasyBase {
    /**
     * An id of a contact batch, queries for calls of a particular contact batch
     */
    batchId?: number;
    /**
     * An id of a campaign, queries for calls included to a particular campaign. Specify null for all campaigns and 0 for default campaign
     */
    campaignId?: number;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * Phone number in E.164 format (11-digit) that call was from. Example: 12132000384
     */
    fromNumber?: string;
    /**
     * Lists the Call ids to search for. If calls ids are specified then other query parameters can be ignored
     */
    id?: number[];
    /**
     * Filters inbound calls for "true" value and outbound calls for "false" value
     */
    inbound?: boolean;
    /**
     * Start of the find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    intervalBegin?: number;
    /**
     * End of the find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    intervalEnd?: number;
    /**
     * A label for a specific call
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
     * Searches for all calls with statuses listed in a comma separated string. Available values: SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    results?: string;
    /**
     * Searches for all calls which correspond to statuses listed in a comma separated string. Available values: READY, SELECTED, CALLBACK, FINISHED, DISABLED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    states?: string;
    /**
     * Phone number in E.164 format (11-digit) that call was sent to. Example: 12132000384
     */
    toNumber?: string;
}
export declare class FindCallsResponse extends SpeakeasyBase {
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
