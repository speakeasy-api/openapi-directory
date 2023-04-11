import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestLogEventsAsJsonXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
/**
 * Operation status:
 *
 * @remarks
 *
 * * `0` - Success
 *
 * * `2` - Error
 */
export declare enum RequestLogEventsAsJsonStatusEnum {
    Zero = "0",
    Two = "2"
}
export declare class RequestLogEventsAsJsonRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestLogEventsAsJsonXSdsDateFormatEnum;
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
    status?: RequestLogEventsAsJsonStatusEnum;
    /**
     * Operation ID
     *
     * @remarks
     *
     * cf. `GET /eventlog/operations`
     */
    type?: number;
    /**
     * User client
     */
    userClient?: string;
    /**
     * User ID
     */
    userId?: number;
}
export declare class RequestLogEventsAsJsonResponse extends SpeakeasyBase {
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
