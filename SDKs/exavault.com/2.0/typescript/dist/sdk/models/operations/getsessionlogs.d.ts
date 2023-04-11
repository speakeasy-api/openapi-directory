import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSessionLogsRequest extends SpeakeasyBase {
    /**
     * End date of the filter data range
     */
    endDate?: Date;
    /**
     * Access Token
     */
    evAccessToken: string;
    /**
     * API Key
     */
    evApiKey: string;
    /**
     * Used to filter session logs by ip address.
     */
    ipAddress?: string;
    /**
     * Limit of the records list
     */
    limit?: number;
    /**
     * Offset of the records list
     */
    offset?: number;
    /**
     * Path used to filter records
     */
    path?: string;
    /**
     * Comma separated list sort params
     */
    sort?: string;
    /**
     * Start date of the filter data range
     */
    startDate?: Date;
    /**
     * Filter session logs for operation type (see table above for acceptable values)
     */
    type?: string;
    /**
     * Username used for filtering a list
     */
    username?: string;
}
export declare class GetSessionLogsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    sessionActivityResponse?: shared.SessionActivityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
