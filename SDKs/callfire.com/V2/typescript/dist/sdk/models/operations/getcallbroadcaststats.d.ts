import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCallBroadcastStatsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCallBroadcastStatsRequest extends SpeakeasyBase {
    /**
     * Start of the search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    begin?: number;
    /**
     * End of the search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    end?: number;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of a call broadcast
     */
    id: number;
}
export declare class GetCallBroadcastStatsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    callBroadcastStats?: shared.CallBroadcastStats;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
