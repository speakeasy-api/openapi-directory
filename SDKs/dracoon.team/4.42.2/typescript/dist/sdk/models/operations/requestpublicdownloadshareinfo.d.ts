import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestPublicDownloadShareInfoXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestPublicDownloadShareInfoRequest extends SpeakeasyBase {
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestPublicDownloadShareInfoXSdsDateFormatEnum;
    /**
     * Access key
     */
    accessKey: string;
}
export declare class RequestPublicDownloadShareInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    publicDownloadShare?: shared.PublicDownloadShare;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
