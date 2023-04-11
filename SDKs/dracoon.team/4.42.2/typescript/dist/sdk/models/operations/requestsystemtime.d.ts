import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestSystemTimeXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestSystemTimeRequest extends SpeakeasyBase {
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestSystemTimeXSdsDateFormatEnum;
}
export declare class RequestSystemTimeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Acceptable
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    sdsServerTime?: shared.SdsServerTime;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
