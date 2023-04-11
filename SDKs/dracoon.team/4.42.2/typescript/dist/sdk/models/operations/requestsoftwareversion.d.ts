import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestSoftwareVersionXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestSoftwareVersionRequest extends SpeakeasyBase {
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestSoftwareVersionXSdsDateFormatEnum;
}
export declare class RequestSoftwareVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Acceptable
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    softwareVersionData?: shared.SoftwareVersionData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
