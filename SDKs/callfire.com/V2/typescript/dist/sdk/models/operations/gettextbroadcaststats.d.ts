import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTextBroadcastStatsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetTextBroadcastStatsRequest extends SpeakeasyBase {
    /**
     * Start of a search find time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    begin?: number;
    /**
     * End of a search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    end?: number;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of a text broadcast
     */
    id: number;
}
export declare class GetTextBroadcastStatsResponse extends SpeakeasyBase {
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
    textBroadcastStatsDto?: shared.TextBroadcastStatsDto;
}
