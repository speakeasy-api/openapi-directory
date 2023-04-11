import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestRoomActivitiesLogAsJsonXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestRoomActivitiesLogAsJsonRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestRoomActivitiesLogAsJsonXSdsDateFormatEnum;
    /**
     * Filter events until given date
     *
     * @remarks
     *
     * e.g. `2015-12-31T23:59:00`
     */
    dateEnd?: string;
    /**
     * Filter events from given date
     *
     * @remarks
     *
     * e.g. `2015-12-31T23:59:00`
     */
    dateStart?: string;
    /**
     * Range limit.
     *
     * @remarks
     *
     * Maximum 500.
     *
     *  For more results please use paging (`offset` + `limit`).
     */
    limit?: number;
    /**
     * Range offset
     */
    offset?: number;
    /**
     * Room ID
     */
    roomId: number;
    /**
     * Sort string
     */
    sort?: string;
    /**
     * Operation status:
     *
     * @remarks
     *
     * * `0` - Success
     *
     * * `2` - Error
     */
    status?: number;
    /**
     * Operation ID
     *
     * @remarks
     *
     * cf. `GET /eventlog/operations`
     */
    type?: number;
    /**
     * User ID
     */
    userId?: number;
}
export declare class RequestRoomActivitiesLogAsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    logEventList?: shared.LogEventList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
